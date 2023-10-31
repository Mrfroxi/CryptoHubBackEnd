import { PartialType } from '@nestjs/mapped-types';
import { CreateCryptDto } from './create-crypt.dto';

export class UpdateCryptDto extends PartialType(CreateCryptDto) {}
