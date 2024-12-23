import { IsNotEmpty, IsNumber, IsString, Matches, Min } from "class-validator";
import { REGEX } from "../../common/regex/regex";
import { ApiProperty } from "@nestjs/swagger";
import { mockAddGroceryRequest } from "../sample-req/sample-req";

export class AddGrocery {
    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.name)
    @ApiProperty({ type: String, required: true, example: mockAddGroceryRequest.name })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ type: String, required: true, example: mockAddGroceryRequest.price })
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @ApiProperty({ type: String, required: true, example: mockAddGroceryRequest.quantity })
    quantity: number;
}