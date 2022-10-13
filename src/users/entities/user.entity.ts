import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User  extends Document{
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    password: string

    @Prop({ type: Number, select: false})
    __v: number 
}


export const UserSchema = SchemaFactory.createForClass(User)