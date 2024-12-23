import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Grocery } from "../entity/grocery.entity";
import { Repository } from "typeorm";
import { AddGrocery } from "../dto/add-grocery.dto";
import { FilterGroceryDto } from "../dto/filter-grocery.dto";
import { errors } from "../../common/messages/error";

@Injectable()
export class GroceryRepository {
    constructor(
        @InjectRepository(Grocery) private readonly groceryRepository: Repository<Grocery>
    ) { }

    async addGrocery(addGroceryDto: AddGrocery | AddGrocery[]): Promise<Grocery | Grocery[]> {
        try {
            if (Array.isArray(addGroceryDto)) {
                // Handle an array of groceries
                const groceries = addGroceryDto.map(dto => this.groceryRepository.create(dto));
                return await this.groceryRepository.save(groceries);
            } else {
                // Handle a single grocery
                const grocery = this.groceryRepository.create(addGroceryDto);
                return await this.groceryRepository.save(grocery);

            }
        } catch (error) {
            throw error
        }
    }

    async findGroceries(filterDto: FilterGroceryDto): Promise<Grocery[]> {
        try {
            const { id, name } = filterDto;
            const query = this.groceryRepository.createQueryBuilder('grocery');

            if (id) {
                query.andWhere('grocery.id = :id', { id });
            }
            if (name) {
                query.andWhere('grocery.name LIKE :name', { name: `%${name}%` });
            }

            return await query.getMany();
        } catch (error) {
            throw error
        }
    }

    async updateGroceries(id: number, updateGroceryDto: Partial<AddGrocery>) {
        try {
            const grocery = await this.groceryRepository.findOneBy({ id });

            if (!grocery) {
                throw new HttpException({ error: errors.business.grocery.notFound }, errors.business.grocery.notFound.httpCode)
            }
            return this.groceryRepository.update(id, updateGroceryDto);
        } catch (error) {
            throw error
        }
    }

    async deleteGroceries(id: number) {
        try {
            const grocery = await this.groceryRepository.findOneBy({ id });

            if (!grocery) {
                throw new HttpException({ error: errors.business.grocery.notFound }, errors.business.grocery.notFound.httpCode)
            }

            return this.groceryRepository.delete(id);
        } catch (error) {
            throw error
        }
    }
}