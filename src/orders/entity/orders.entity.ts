import { Grocery } from '../../grocery/entity/grocery.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @ManyToMany(() => Grocery)
    @JoinTable()
    items: Grocery[];

    @Column('decimal')
    totalAmount: number;
}
