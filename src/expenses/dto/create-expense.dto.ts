import { Frequency } from './../../frequency/entities/frequency.entity';
import { TagOfExpense } from './../../tag-of-expenses/entities/tag-of-expense.entity';
import { TypeOfExpense } from './../../type-of-expenses/entities/type-of-expense.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
     @ApiProperty()
    type: TypeOfExpense

    @ApiProperty()
    tag: TagOfExpense

    @ApiProperty()
    data: Date
 
    @ApiProperty()
    value: number
 
    @ApiProperty()
    title: string
 
    @ApiProperty()
    description: string
 
    @ApiProperty()
    frequency: Frequency

}
