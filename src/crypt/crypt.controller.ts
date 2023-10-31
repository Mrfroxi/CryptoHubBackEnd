import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CryptService } from './crypt.service';
import { CreateCryptDto } from './dto/create-crypt.dto';
import { UpdateCryptDto } from './dto/update-crypt.dto';

@Controller('crypt')
export class CryptController {
  constructor(private readonly cryptService: CryptService) {}

  @Post()
  create(@Body() createCryptDto: CreateCryptDto) {
    return this.cryptService.create(createCryptDto);
  }

  @Get()
  findAll() {
    return this.cryptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cryptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCryptDto: UpdateCryptDto) {
    return this.cryptService.update(+id, updateCryptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cryptService.remove(+id);
  }
}
