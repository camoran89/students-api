import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from '../application/services/student.service';
import { getModelToken } from '@nestjs/mongoose';
import { Student } from '../domain/entities/student.entity';

describe('StudentService', () => {
  let service: StudentService;
  let mockStudentModel;

  beforeEach(async () => {
    mockStudentModel = {
      find: jest.fn().mockReturnValue([]),
      findById: jest.fn().mockReturnValue(null),
      create: jest.fn().mockReturnValue({}),
      findByIdAndUpdate: jest.fn().mockReturnValue(null),
      findByIdAndDelete: jest.fn().mockReturnValue(null),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        { provide: getModelToken(Student.name), useValue: mockStudentModel },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty array when finding all students', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should return null when finding a non-existent student', async () => {
    expect(await service.findOne('invalid_id')).toBeNull();
  });
});
