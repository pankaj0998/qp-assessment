import { IsOptional, IsString, IsNumber } from 'class-validator';

export class FilterGroceryDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;
}
