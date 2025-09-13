import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'abc123bvk789',
      signOptions: { expiresIn: "1d" }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
