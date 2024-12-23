import { Injectable } from '@nestjs/common';
import { OrderRepository } from './repository/orders.repository';
import { OrderDto } from './dto/order.dto';
import { Order } from './entity/orders.entity';

@Injectable()
export class OrdersService {
    constructor(private readonly orderRepository: OrderRepository) { }

    async findAvailableItems() {
        return await this.orderRepository.findAvailableItems()
    }

    async bookOrder(orderDto: OrderDto): Promise<any> {
        return await this.orderRepository.bookOrder(orderDto)
    }

    async fetchOrder(userId: string): Promise<Order> {
        return await this.orderRepository.fetchOrder(userId)
    }
}
