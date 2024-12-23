import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { errors } from "../../common/messages/error";
import { UserEntity } from "../entity/user.entity";
import { AddUserDto } from "../dto/add-user.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity) private readonly userModel: Repository<UserEntity>
    ) { }

    async addUser(addUserDto: AddUserDto): Promise<UserEntity> {
        try {
            const existingUser = await this.userModel.findOneBy({
                emailId: addUserDto.emailId,
            });

            if (existingUser) {
                throw new HttpException({ error: errors.business.user.alreadyExist }, errors.business.user.alreadyExist.httpCode);
            }

            const user = this.userModel.create(addUserDto);
            return await this.userModel.save(user);
        } catch (error) {
            throw error
        }
    }

    async fetchDetails(userId: string): Promise<UserEntity> {
        try {
            const user = await this.userModel.findOneBy({ userId: userId });

            if (!user) {
                throw new HttpException({ error: errors.business.user.notFound }, errors.business.user.notFound.httpCode);
            }

            return user;
        } catch (error) {
            throw error
        }
    }

    async updateUser(id: number, updateUserDto: AddUserDto): Promise<UserEntity> {
        try {
            const user = await this.userModel.findOneBy({ id });

            if (!user) {
                throw new HttpException({ error: errors.business.user.notFound }, errors.business.user.notFound.httpCode);
            }

            await this.userModel.update(id, updateUserDto);
            return await this.userModel.findOneBy({ id });
        } catch (error) {
            throw error
        }
    }

    async deleteUser(id: number): Promise<void> {
        try {
            const user = await this.userModel.findOneBy({ id });

            if (!user) {
                throw new HttpException({ error: errors.business.user.notFound }, errors.business.user.notFound.httpCode);
            }

            await this.userModel.delete(id);
        } catch (error) {
            throw error
        }
    }
}
