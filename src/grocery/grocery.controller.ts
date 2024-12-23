import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../common/config/constants';
import { AddGrocery } from './dto/add-grocery.dto';
import { Grocery } from './entity/grocery.entity';
import { FilterGroceryDto } from './dto/filter-grocery.dto';
import { addGrocery } from '../common/openapi/request-body';

@ApiTags(CONSTANTS.ROUTES.GROCERY.TAG)
@Controller({
    path: CONSTANTS.ROUTES.GROCERY.CONTROLLER,
    version: CONSTANTS.ROUTES.GROCERY.VERSION
})
export class GroceryController {
    constructor(private readonly groceryService: GroceryService) { }

    @Post(CONSTANTS.ROUTES.GROCERY.OPERATIONS.ADD.PATH)
    @HttpCode(HttpStatus.OK)
    @ApiBody(addGrocery)
    async addGrocery(@Body() addGroceryDto: AddGrocery | AddGrocery[]): Promise<Grocery | Grocery[]> {
        return await this.groceryService.addGrocery(addGroceryDto);
    }

    @Post(CONSTANTS.ROUTES.GROCERY.OPERATIONS.GET.PATH)
    @HttpCode(HttpStatus.OK)
    async findGroceries(@Body() filterGroceryDto: FilterGroceryDto): Promise<Grocery[]> {
        return await this.groceryService.findGroceries(filterGroceryDto);
    }

    @Patch(CONSTANTS.ROUTES.GROCERY.OPERATIONS.UPDATE.PATH)
    @HttpCode(HttpStatus.OK)
    async updateGroceries(@Body() updateGroceries: AddGrocery, @Param('id') id: number): Promise<Grocery> {
        return await this.groceryService.updateGroceries(id, updateGroceries);
    }

    @Delete(CONSTANTS.ROUTES.GROCERY.OPERATIONS.DELETE.PATH)
    @HttpCode(HttpStatus.OK)
    async deleteGroceries(@Param('id') id: number): Promise<Grocery> {
        return await this.groceryService.deleteGroceries(id);
    }
}
