import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TypeOfExpensesService } from './type-of-expenses.service';
import { TypeOfExpensesController } from './type-of-expenses.controller';
import { TypeOfExpense, TypeOfExpenseSchema } from './entities/type-of-expense.entity';

@Module({ 
  imports: [
    MongooseModule.forFeature([
      {
        name: TypeOfExpense.name,
        schema: TypeOfExpenseSchema
      }
    ])
  ],
  controllers: [TypeOfExpensesController],
  providers: [TypeOfExpensesService]
})
export class TypeOfExpensesModule {}
