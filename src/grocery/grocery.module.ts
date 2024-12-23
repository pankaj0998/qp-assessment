import { Module } from '@nestjs/common';
import { GroceryController } from './grocery.controller';
import { GroceryService } from './grocery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryRepository } from './repository/grocery.repository';
import { Grocery } from './entity/grocery.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Grocery])
  ],
  controllers: [GroceryController],
  providers: [GroceryService, GroceryRepository]
})
export class GroceryModule { }
