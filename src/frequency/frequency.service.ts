import { UpdateFrequencyDto } from './dto/update-frequency.dto';
import { CreateFrequencyDto } from './dto/create-frequency.dto';
import { Frequency } from './entities/frequency.entity';
import { Injectable } from '@nestjs/common'; 
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose' 

@Injectable()
export class FrequencyService {
  constructor(
    @InjectModel(Frequency.name) private frequencyModel: Model<Frequency>
  ) {}

  async create(createFrequencyDto: CreateFrequencyDto) { 
    let frequency = new this.frequencyModel(createFrequencyDto)
    return frequency.save()
  }

  async findAll() {
    return this.frequencyModel.find().exec()
  }

  async findOne(id: string) {
    return this.frequencyModel.findById(id).exec();
  }
 
  async update(id: string, updateFrequencyDto: UpdateFrequencyDto) { 
    const frequency = this.frequencyModel.findByIdAndUpdate(id, updateFrequencyDto).exec()
    return this.findOne(id)
  }

  async remove(id: string) {
    const frequency = await this.frequencyModel.findOneAndDelete({_id: id});
    return (await frequency).remove()
  }
}
