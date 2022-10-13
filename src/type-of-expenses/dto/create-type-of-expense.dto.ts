import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeOfExpenseDto {
    @ApiProperty()
    type: string
}
