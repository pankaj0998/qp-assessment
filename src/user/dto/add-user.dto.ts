import { IsNotEmpty, IsString, Matches } from "class-validator";
import { REGEX } from "../../common/regex/regex";

export class AddUserDto {
    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.userId)
    userId: string;

    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.name)
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.mobileNumber)
    mobileNumber: string;

    @IsNotEmpty()
    @IsString()
    @Matches(REGEX.email)
    emailId: string;
}