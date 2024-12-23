export default () => ({
    app: {
        host: process.env.APP_HOST || '0.0.0.0',
        port: parseInt(process.env.APP_PORT, 10) || 3000,
        protocol: process.env.APP_PROTOCOL || 'http',
        appName: process.env.APP_NAME || 'qp-assessment',
        environment: process.env.ENV || 'development',
        enableCors: (process.env.ENABLE_CORS === 'true') || false,
        enableCorsConfig: {
            allowedHeaders: process.env.ENABLE_CORS_ALLOWED_HEADERS || '*',
            exposedHeaders: process.env.ENABLE_CORS_EXPOSED_HEADERS || '*',
            origin: process.env.ENABLE_CORS_ORIGIN || 'http://localhost:3000',
            credentials: (process.env.ENABLE_CORS_CREDENTIALS === 'true') || true,
        },
    },
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        userName: process.env.USER_NAME || 'root',
        password: process.env.PASSWORD || 'my-secret-pw',
        databaseName: process.env.DATABASE_NAME || 'grocery-booking',
        autoLoadEntities: (process.env.AUTO_LOAD_ENTITIES === 'true') || true,
        synchronize: (process.env.SYNCHRONIZE === 'true') || true,
    }

})