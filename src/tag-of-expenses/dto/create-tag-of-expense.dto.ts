import { ApiProperty } from '@nestjs/swagger';

export class CreateTagOfExpenseDto {
    @ApiProperty()
    tag: string 
}
