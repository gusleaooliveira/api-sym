import { PartialType } from '@nestjs/swagger';
import { CreateTagOfExpenseDto } from './create-tag-of-expense.dto';

export class UpdateTagOfExpenseDto extends PartialType(CreateTagOfExpenseDto) {}
