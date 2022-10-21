import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
    @ApiProperty()
    _id?: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    tag: string[];

    @ApiProperty()
    data: Date;

    @ApiProperty()
    value: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    frequency: string;
}
