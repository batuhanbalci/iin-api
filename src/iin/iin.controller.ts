import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIinDto } from './dto/create-iin.dto';
import { IinService } from './iin.service';

@Controller('iin')
export class IinController {
  constructor(private iinService: IinService) {}

  @Get()
  async findAll() {
    return this.iinService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateIinDto) {
    this.iinService.create(dto);
  }
}
