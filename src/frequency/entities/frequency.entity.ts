import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Frequency  extends Document{
    @Prop()
    frequency: string    

    @Prop({ type: Number, select: false})
    __v: number 
}


export const FrequencySchema = SchemaFactory.createForClass(Frequency)