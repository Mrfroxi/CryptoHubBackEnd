import { Injectable } from '@nestjs/common';
import { CreateCryptDto } from './dto/create-crypt.dto';
import { UpdateCryptDto } from './dto/update-crypt.dto';

@Injectable()
export class CryptService {
  create(createCryptDto: CreateCryptDto) {
    return 'This action adds a new crypt';
  }

  findAll() {
    return `This action returns all crypt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crypt`;
  }

  update(id: number, updateCryptDto: UpdateCryptDto) {
    return `This action updates a #${id} crypt`;
  }

  remove(id: number) {
    return `This action removes a #${id} crypt`;
  }
}
