import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ versionKey: false })
export class Revenues extends Document {
    @Prop({ type: String })
    type: string;

    @Prop({ type: [] })
    tag: string[];

    @Prop({ type: Date })
    data: Date;

    @Prop({ type: Number })
    value: number;

    @Prop({ type: String })
    title: string;

    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    frequency: string;

    @Prop({ type: Number, select: false })
    __v: number;
}

export const RevenuesSchema = SchemaFactory.createForClass(Revenues);
