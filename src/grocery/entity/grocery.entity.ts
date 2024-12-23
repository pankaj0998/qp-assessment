import { CONSTANTS } from '../../common/config/constants';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(CONSTANTS.ROUTES.GROCERY.COLLECTIONS.GROCERY)
export class Grocery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;
}