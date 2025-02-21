import { ApiProperty } from '@nestjs/swagger';

export class StudentDto {
  @ApiProperty({
    example: 'Juan Pérez',
    description: 'Nombre del estudiante',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'juan.perez@example.com',
    description: 'Correo del estudiante',
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: '12345',
    description: 'Contraseña del estudiante',
    required: false,
  })
  password?: string;

  @ApiProperty({
    example: 'STU12345',
    description: 'ID del estudiante',
    required: false,
  })
  studentId?: string;

  @ApiProperty({
    example: 'Ingeniería',
    description: 'Departamento del estudiante',
    required: false,
  })
  department?: string;

  @ApiProperty({
    example: 'Hospital',
    description: 'Rol con el que ingresa sesión',
    required: false,
  })
  role?: string;

  @ApiProperty({
    example: 'Si',
    description: 'Valor para determinar si un estudiante fue aceptado o no',
    required: false,
  })
  acepted?: string;

  @ApiProperty({
    example: '1',
    description: 'Valor para determinar inicio de sesion',
  })
  logged?: number;
}
