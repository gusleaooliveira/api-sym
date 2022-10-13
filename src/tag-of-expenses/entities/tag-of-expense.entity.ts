import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class TagOfExpense extends Document {
    @Prop()
    tag: string 
    
    @Prop({ type: Number, select: false})
    __v: number 
}


export const TagOfExpenseSchema = SchemaFactory.createForClass(TagOfExpense)