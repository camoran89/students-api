import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '../../domain/entities/student.entity';
import { StudentDto } from '../../application/dtos/student';

@Injectable()
export class StudentRepository {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  async create(student: StudentDto): Promise<Student> {
    return new this.studentModel(student).save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student | null> {
    return this.studentModel.findOne({ studentId: id }).exec();
  }

  async update(id: string, studentDto: StudentDto): Promise<Student | null> {
    return this.studentModel.findOneAndUpdate({ studentId: id }, studentDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Student | null> {
    return this.studentModel.findOneAndDelete({ studentId: id }).exec();
  }
}
