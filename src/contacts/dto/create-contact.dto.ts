import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    country: string;
}
