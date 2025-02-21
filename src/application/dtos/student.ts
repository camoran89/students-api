import { ApiProperty } from "@nestjs/swagger";

export class StudentDto {
    @ApiProperty({ example: 'Juan Pérez', description: 'Nombre del estudiante', required: false })
    name?: string;
  
    @ApiProperty({ example: 'juan.perez@example.com', description: 'Correo del estudiante', required: false })
    email?: string;
  
    @ApiProperty({ example: 'STU12345', description: 'ID del estudiante', required: false })
    studentId?: string;
  
    @ApiProperty({ example: 'Ingeniería', description: 'Departamento del estudiante', required: false })
    department?: string;
  }