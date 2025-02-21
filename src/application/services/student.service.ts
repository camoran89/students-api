import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/entities/student.entity';
import { StudentDto } from '../dtos/student';
import { StudentRepository } from '../../domain/repositories/student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(studentDto: StudentDto): Promise<Student> {
    // Validación y lógica de negocio antes de guardar
    if (studentDto && studentDto.email && !studentDto.email.includes('@')) {
      throw new Error('El correo electrónico no es válido.');
    }
    return this.studentRepository.create(studentDto);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }

  async findOne(id: string): Promise<StudentDto | null> {
    return this.studentRepository.findOne(id);
  }

  async update(id: string, studentDto: StudentDto): Promise<Student | null> {
    return this.studentRepository.update(id, studentDto);
  }

  async delete(id: string): Promise<Student | null> {
    return this.studentRepository.delete(id);
  }
}
