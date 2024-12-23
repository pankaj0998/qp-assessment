import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CONSTANTS } from '../common/config/constants';
import { OrderDto } from './dto/order.dto';
import { ApiBody } from '@nestjs/swagger';
import { bookOrderbody } from '../common/openapi/request-body';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) { }

    @Get(CONSTANTS.ROUTES.ORDER.OPERATIONS.AVAILABLE_ITEM.PATH)
    @HttpCode(HttpStatus.OK)
    async findAvailableItems(): Promise<any> {
        return await this.orderService.findAvailableItems();
    }

    @Post(CONSTANTS.ROUTES.ORDER.OPERATIONS.FETCH.PATH)
    @HttpCode(HttpStatus.OK)
    async fetchOrder(@Param('userId') userId: string): Promise<any> {
        return await this.orderService.fetchOrder(userId);
    }

    @Post(CONSTANTS.ROUTES.ORDER.OPERATIONS.BOOK.PATH)
    @HttpCode(HttpStatus.OK)
    @ApiBody(bookOrderbody)
    async bookOrder(@Body() bookOrder: OrderDto): Promise<any> {
        return await this.orderService.bookOrder(bookOrder);
    }
}
