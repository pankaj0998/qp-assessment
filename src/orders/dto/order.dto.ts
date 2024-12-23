import { IsArray, IsNotEmpty, IsNumber, IsString, Matches, Min } from "class-validator";
import { REGEX } from "../../common/regex/regex";
import { Grocery } from "../../grocery/entity/grocery.entity";

export class Items {
    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.name)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    quantity: number
}

export class OrderDto {
    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.userId)
    userId: string;

    @IsArray()
    @IsNotEmpty()
    items: Items[];
}