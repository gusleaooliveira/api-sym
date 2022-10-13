import { PartialType } from '@nestjs/swagger';
import { CreateTypeOfExpenseDto } from './create-type-of-expense.dto';

export class UpdateTypeOfExpenseDto extends PartialType(CreateTypeOfExpenseDto) {}
