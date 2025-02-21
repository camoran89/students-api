import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Correo del usuario',
    required: true
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Contraseña del usuario',
    required: true
  })
  password: string;
}
