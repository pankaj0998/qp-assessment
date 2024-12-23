import { Injectable } from '@nestjs/common';
import { GroceryRepository } from './repository/grocery.repository';
import { AddGrocery } from './dto/add-grocery.dto';
import { Grocery } from './entity/grocery.entity';
import { FilterGroceryDto } from './dto/filter-grocery.dto';

@Injectable()
export class GroceryService {
    constructor(private readonly groceryRepository: GroceryRepository) { }

    async addGrocery(addGroceryDto: AddGrocery | AddGrocery[]): Promise<Grocery | Grocery[]> {
        return await this.groceryRepository.addGrocery(addGroceryDto);
    }

    async findGroceries(filterDto: FilterGroceryDto): Promise<Grocery[]> {
        return await this.findGroceries(filterDto);
    }

    async updateGroceries(id: number, updateGroceryDto: Partial<AddGrocery>) {
        return await this.updateGroceries(id, updateGroceryDto);
    }

    async deleteGroceries(id: number) {
        return await this.deleteGroceries(id);

    }
}
