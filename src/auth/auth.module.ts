import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController],
  imports:[UsersModule,PassportModule]
})
export class AuthModule {}
