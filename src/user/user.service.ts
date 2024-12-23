import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async addUser(addUserDto: AddUserDto): Promise<UserEntity> {
        return await this.userRepository.addUser(addUserDto);
    }

    async fetchDetails(userId: string): Promise<UserEntity> {
        return await this.userRepository.fetchDetails(userId);
    }

    async updateUser(id: number, updateUserDto: AddUserDto): Promise<UserEntity> {
        return await this.userRepository.updateUser(id, updateUserDto);
    }

    async deleteUser(id: number): Promise<void> {
        return await this.userRepository.deleteUser(id);
    }
}
