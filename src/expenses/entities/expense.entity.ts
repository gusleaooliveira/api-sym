import { Frequency } from './../../frequency/entities/frequency.entity';
import { TagOfExpense } from './../../tag-of-expenses/entities/tag-of-expense.entity';
import { TypeOfExpense } from './../../type-of-expenses/entities/type-of-expense.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';

@Schema({ versionKey: false })
export class Expenses extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: TypeOfExpense.name })
    type: TypeOfExpense

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: TagOfExpense.name })
    tag: TagOfExpense

    @Prop()
    data: Date


    @Prop()
    value: number


    @Prop()
    title: string


    @Prop()
    description: string


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Frequency.name })
    frequency: Frequency

    @Prop({ type: Number, select: false})
    __v: number 
}


export const ExpensesSchema = SchemaFactory.createForClass(Expenses)