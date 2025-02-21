import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '../../domain/entities/student.entity';
import { StudentDto } from '../../application/dtos/student';

import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) { }

  async create(student: StudentDto): Promise<Student> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(student.password ?? '', saltRounds);

    const newStudent = new this.studentModel({
      ...student,
      password: hashedPassword
    });

    return newStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student | null> {
    return this.studentModel.findOne({ studentId: id }).exec();
  }

  async login(user: string, password: string): Promise<Student | null> {
    const student = await this.studentModel.findOne({ email: user }).exec();

    if (!student) return null;

    const isPasswordValid = await bcrypt.compare(password, student.password);

    console.log(isPasswordValid, password, student.password)

    if (!isPasswordValid) return null;

    return this.studentModel
      .findOneAndUpdate(
        { email: user },
        { $set: { logged: 1 } },
        { new: true }
      )
      .exec();
  }

  async logout(user: string): Promise<Student | null> {
    return this.studentModel
      .findOneAndUpdate(
        { email: user },
        { $set: { logged: 0 } },
        { new: true }
      )
      .exec();
  }

  async update(id: string, studentDto: StudentDto): Promise<Student | null> {
    return this.studentModel
      .findOneAndUpdate({ studentId: id }, studentDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Student | null> {
    return this.studentModel.findOneAndDelete({ studentId: id }).exec();
  }
}
