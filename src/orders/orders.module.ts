import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/orders.entity';
import { Grocery } from '../grocery/entity/grocery.entity';
import { OrderRepository } from './repository/orders.repository';
import { UserEntity } from '../user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Grocery, UserEntity])],
  controllers: [OrdersController],
  providers: [OrdersService, OrderRepository]
})
export class OrdersModule { }
