import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from 'src/application/dtos/login';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Authenticate user and return JWT' })
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    const token = this.authService.generateToken(loginDto.email);
    return { access_token: token };
  }

  @Post('hash')
  @ApiOperation({ summary: 'Hash a password' })
  async hashPassword(
    @Body() hashDto: LoginDto,
  ): Promise<{ hashedPassword: string }> {
    const hashedPassword = await this.authService.hashPassword(
      hashDto.password,
    );
    return { hashedPassword };
  }
}
