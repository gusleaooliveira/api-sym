import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { Revenues } from './entities/revenue.entity';

@Injectable()
export class RevenuesService {
  constructor(
    @InjectModel(Revenues.name) private RevenuesModel: Model<Revenues>,
  ) { }

  async create(createRevenuesDto: CreateRevenueDto) {
    const Revenues = new this.RevenuesModel(createRevenuesDto);
    return Revenues.save();
  }

  async findAll() {
    return this.RevenuesModel.find().exec();
  }

  async findOne(id: string) {
    return this.RevenuesModel.findById(id).exec();
  }

  async update(id: string, updateRevenuesDto: UpdateRevenueDto) {
    const Revenues = await this.RevenuesModel.findByIdAndUpdate(
      id,
      updateRevenuesDto,
    ).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    const Revenues = this.RevenuesModel.findOneAndDelete({ _id: id });
    return (await Revenues).remove();
  }
}
