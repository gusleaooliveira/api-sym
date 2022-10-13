import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class TypeOfExpense extends Document {
    @Prop()
    type: string

    @Prop({ type: Number, select: false})
    __v: number 
}


export const TypeOfExpenseSchema = SchemaFactory.createForClass(TypeOfExpense)