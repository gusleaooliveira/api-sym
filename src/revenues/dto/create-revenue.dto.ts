import { ApiProperty } from '@nestjs/swagger';

export class CreateRevenueDto {
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
