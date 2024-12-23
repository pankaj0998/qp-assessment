import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CONSTANTS } from '../common/config/constants';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './entity/user.entity';
import { ApiBody } from '@nestjs/swagger';
import { addUser } from '../common/openapi/request-body';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post(CONSTANTS.ROUTES.USER.OPERATIONS.ADD.PATH)
    @HttpCode(HttpStatus.OK)
    @ApiBody(addUser)
    async addGrocery(@Body() addUserDto: AddUserDto): Promise<UserEntity> {
        return await this.userService.addUser(addUserDto);
    }

    @Post(CONSTANTS.ROUTES.USER.OPERATIONS.FETCH.PATH)
    @HttpCode(HttpStatus.OK)
    async fetchDetails(@Param('userId') userId: string): Promise<UserEntity> {
        return await this.userService.fetchDetails(userId);
    }

    @Patch(CONSTANTS.ROUTES.USER.OPERATIONS.UPDATE.PATH)
    @HttpCode(HttpStatus.OK)
    async updateUser(@Body() updateUser: AddUserDto, @Param('id') id: number): Promise<UserEntity> {
        return await this.userService.updateUser(id, updateUser);
    }

    @Patch(CONSTANTS.ROUTES.USER.OPERATIONS.DELETE.PATH)
    @HttpCode(HttpStatus.OK)
    async deleteUser(@Param('id') id: number): Promise<void> {
        return await this.userService.deleteUser(id);
    }
}
