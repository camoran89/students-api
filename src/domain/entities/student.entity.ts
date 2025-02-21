import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  studentId: string;

  @Prop()
  department: string;

  @Prop()
  acepted: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
