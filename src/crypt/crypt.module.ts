import { Module } from '@nestjs/common';
import { CryptService } from './crypt.service';
import { CryptController } from './crypt.controller';

@Module({
  controllers: [CryptController],
  providers: [CryptService],
})
export class CryptModule {}
