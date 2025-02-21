import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentService } from '../../application/services/student.service';
import { Student } from '../../domain/entities/student.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StudentDto } from 'src/application/dtos/student';
import { LoginDto } from 'src/application/dtos/login';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  async create(@Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.create(studentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  async findAll(): Promise<StudentDto[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a student by ID' })
  async findOne(@Param('id') id: string): Promise<StudentDto | null> {
    return this.studentService.findOne(id);
  }

  @Put('login')
  @ApiOperation({ summary: 'Login' })
  async login(@Body() loginDto: LoginDto): Promise<StudentDto | null> {
    console.log(loginDto)
    return this.studentService.login(loginDto.email, loginDto.password);
  }

  @Put('logout')
  @ApiOperation({ summary: 'Logout' })
  async logout(@Body() user: string): Promise<StudentDto | null> {
    return this.studentService.logout(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a student by ID' })
  async update(
    @Param('id') id: string,
    @Body() studentDto: StudentDto,
  ): Promise<StudentDto | null> {
    return this.studentService.update(id, studentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student by ID' })
  async delete(@Param('id') id: string): Promise<StudentDto | null> {
    return this.studentService.delete(id);
  }
}
