import { CONSTANTS } from '../../common/config/constants';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(CONSTANTS.ROUTES.USER.COLLECTIONS.USER)
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    fullName: string;

    @Column()
    mobileNumber: string;

    @Column()
    emailId: string;
}