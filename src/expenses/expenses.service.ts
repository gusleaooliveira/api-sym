import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expenses.name) private ExpensesModel: Model<Expenses>,
  ) { }

  async create(createExpensesDto: CreateExpenseDto) {
    const Expenses = new this.ExpensesModel(createExpensesDto);
    return Expenses.save();
  }

  async findAll() {
    return this.ExpensesModel.find().exec();
  }

  async findOne(id: string) {
    return this.ExpensesModel.findById(id).exec();
  }

  async update(id: string, updateExpensesDto: UpdateExpenseDto) {
    const Expenses = await this.ExpensesModel.findByIdAndUpdate(
      id,
      updateExpensesDto,
    ).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    const Expenses = this.ExpensesModel.findOneAndDelete({ _id: id });
    return (await Expenses).remove();
  }
}
