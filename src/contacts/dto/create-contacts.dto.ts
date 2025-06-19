import { IsPhoneNumber, IsString } from "class-validator";

export class CreateContactDto{

    @IsString()
    name: string;

    @IsPhoneNumber('BR')
    phoneNumber: string

}