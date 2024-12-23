import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { CONSTANTS } from './common/config/constants';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { GroceryModule } from './grocery/grocery.module';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Create congig service instance for all the configs.
  const configService = app.get<ConfigService>(ConfigService);

  // Enable global prefix if required; To be added before swagger setup
  app.setGlobalPrefix(CONSTANTS.ROUTES.API, {
    exclude: [CONSTANTS.ROUTES.BASE],
  });

  // Enable validation pipe to apply any param/class validations; If not enabled any dto validations would not work
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  // Enable api versioning if required; To be added before swagger setup
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle(CONSTANTS.SWAGGER.HEADER)
    .setDescription(CONSTANTS.SWAGGER.DESCRIPTION)
    // .setVersion(CONSTANTS.SWAGGER.VERSION)
    // .addTag(CONSTANTS.SWAGGER.TAG)
    .build();

  //Add modules in include list for the modules which has controllers
  // that you want to be included in swagger documentation.
  const document = SwaggerModule.createDocument(app, config, { include: [GroceryModule, UserModule, OrdersModule] });

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: CONSTANTS.SWAGGER.TITLE,
    explorer: true
  };

  SwaggerModule.setup(CONSTANTS.SWAGGER.DOCS, app, document, customOptions);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  if (configService.get('app.enableCors')) {
    const enableCorsConfig = configService.get('app.enableCorsConfig');
    app.enableCors(enableCorsConfig);
  }

  console.log(`App listening on port: ${configService.get(CONSTANTS.CONFIG.PORT)}`)
  await app.listen(configService.get(CONSTANTS.CONFIG.PORT), configService.get(CONSTANTS.CONFIG.HOST));
}
bootstrap();
