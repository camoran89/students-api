import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  studentId: string;

  @Prop()
  department: string;

  @Prop()
  role: string;

  @Prop()
  acepted: string;

  @Prop()
  logged: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
