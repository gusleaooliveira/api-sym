import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRaunds = await bcrypt.genSalt();
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, saltOrRaunds);

    let obj = Object.assign(createUserDto, {
      password: hash
    })

    let user = new this.userModel(obj)
    return user.save()
  }

  async findAll() {
    return this.userModel.find().exec()
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string){
    return this.userModel.findOne({ email: email }).exec()
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const salt = await bcrypt.genSalt();
    const password = updateUserDto.password;
    const hash = await bcrypt.hash(password, salt);

    let obj = Object.assign(updateUserDto, {
      password: hash
    })

    const user = this.userModel.findByIdAndUpdate(id, obj).exec()
    return this.findOne(id)
  }

  async remove(id: string) {
    const user = await this.userModel.findOneAndDelete({_id: id});
    return (await user).remove()
  }
}
