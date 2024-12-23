import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { errors } from "../../common/messages/error";
import { Grocery } from "../../grocery/entity/grocery.entity";
import { Order } from "../entity/orders.entity";
import { OrderDto } from "../dto/order.dto";
import { UserEntity } from "../../user/entity/user.entity";

@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(Grocery)
        private readonly groceryRepo: Repository<Grocery>,
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>,
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) { }

    async findAvailableItems() {
        try {
            return this.groceryRepo.createQueryBuilder('grocery')
                .where('grocery.quantity > :quantity', { quantity: 0 })
                .getMany();
        } catch (error) {
            throw error
        }
    }

    async bookOrder(orderDto: OrderDto): Promise<any> {
        try {
            const { userId, items } = orderDto;
            const orderItems = [];
            let totalAmount = 0;
            const user = await this.userRepo.findOneBy({ userId: orderDto.userId });
            if (!user) {
                throw new HttpException({ error: errors.business.user.notFound }, errors.business.user.notFound.httpCode)
            }
            for (const item of items) {
                const grocery = await this.groceryRepo.findOneBy({ name: item.name });
                if (!grocery || grocery.quantity < item.quantity) {
                    throw new HttpException({ error: errors.business.order.insufficientQuantity, description: errors.business.order.insufficientQuantity.description(item.name) }, errors.business.order.insufficientQuantity.httpCode)
                }
                grocery.quantity -= item.quantity;
                await this.groceryRepo.save(grocery);

                orderItems.push(grocery);
                totalAmount += grocery.price * item.quantity;
            }

            return this.orderRepo.save({
                userId,
                items: orderItems,
                totalAmount,
            });
        } catch (error) {
            throw error
        }
    }

    async fetchOrder(userId: string): Promise<Order> {
        try {
            const order = await this.orderRepo.findOneBy({ userId: userId });

            if (!order) {
                throw new HttpException({ error: errors.business.order.notFound }, errors.business.order.notFound.httpCode)
            }
            return order;
        } catch (error) {
            throw error
        }
    }
}