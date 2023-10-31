import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CryptModule } from './crypt/crypt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [  
    ConfigModule.forRoot({ isGlobal:true }),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory: (configService: ConfigService)=> ({
        type: 'postgres',
        host: configService.get('TYPEORM_HOST'),
        port: configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [UserEntity],
        synchronize: true,
      }),
      inject:[ConfigService],
    }),
    UsersModule, CryptModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}