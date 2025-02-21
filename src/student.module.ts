import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './infrastructure/controllers/student.controller';
import { StudentService } from './application/services/student.service';
import { Student, StudentSchema } from './domain/entities/student.entity';
import { StudentRepository } from './domain/repositories/student.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports: [StudentService, StudentRepository],
})
export class StudentsModule {}