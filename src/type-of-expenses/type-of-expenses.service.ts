import { UpdateTypeOfExpenseDto } from './dto/update-type-of-expense.dto';
import { CreateTypeOfExpenseDto } from './dto/create-type-of-expense.dto';
import { TypeOfExpense } from './entities/type-of-expense.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TypeOfExpensesService {
  constructor(
    @InjectModel(TypeOfExpense.name) private TypeOfExpensessModel: Model<TypeOfExpense>
  ) { }

  async create(createTypeOfExpensessDto: CreateTypeOfExpenseDto) {
    let TypeOfExpensess = new this.TypeOfExpensessModel(createTypeOfExpensessDto)
    return TypeOfExpensess.save()
  }

  async findAll() {
    return this.TypeOfExpensessModel.find().exec()
  }

  async findOne(id: string) {
    return this.TypeOfExpensessModel.findById(id).exec();
  }

  async update(id: string, updateTypeOfExpensessDto: UpdateTypeOfExpenseDto) {
    const TypeOfExpensess = await this.TypeOfExpensessModel.findByIdAndUpdate(id, updateTypeOfExpensessDto).exec()
    return this.findOne(id)
  }

  async remove(id: string) {
    const TypeOfExpensess = this.TypeOfExpensessModel.findOneAndDelete({ _id: id });
    return (await TypeOfExpensess).remove()
  }
}
