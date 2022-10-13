import { UpdateTagOfExpenseDto } from './dto/update-tag-of-expense.dto';
import { CreateTagOfExpenseDto } from './dto/create-tag-of-expense.dto';
import { TagOfExpense } from './entities/tag-of-expense.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TagOfExpensesService {
  constructor(
    @InjectModel(TagOfExpense.name) private TagOfExpensesModel: Model<TagOfExpense>
  ) { }

  async create(createTagOfExpensesDto: CreateTagOfExpenseDto) {
    let TagOfExpenses = new this.TagOfExpensesModel(createTagOfExpensesDto)
    return TagOfExpenses.save()
  }

  async findAll() {
    return this.TagOfExpensesModel.find().exec()
  }

  async findOne(id: string) {
    return this.TagOfExpensesModel.findById(id).exec();
  }

  async update(id: string, updateTagOfExpensesDto: UpdateTagOfExpenseDto) {
    const TagOfExpenses = await this.TagOfExpensesModel.findByIdAndUpdate(id, updateTagOfExpensesDto).exec()
    return this.findOne(id)
  }

  async remove(id: string) {
    const TagOfExpenses = this.TagOfExpensesModel.findOneAndDelete({ _id: id });
    return (await TagOfExpenses).remove()
  }
}
