import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TagOfExpensesService } from './tag-of-expenses.service';
import { TagOfExpensesController } from './tag-of-expenses.controller';
import { TagOfExpense, TagOfExpenseSchema } from './entities/tag-of-expense.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TagOfExpense.name,
        schema: TagOfExpenseSchema
      }
    ])
  ],
  controllers: [TagOfExpensesController],
  providers: [TagOfExpensesService]
})
export class TagOfExpensesModule {}
