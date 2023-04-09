import { Controller, Post } from '@nestjs/common';
import { IinService } from './iin.service';

@Controller('iin')
export class IinController {
  constructor(private iinService: IinService) {}

  // @Get()
  // async findAll() {
  //   return this.iinService.findAll();
  // }

  // @Post('validate')
  // async validate(@Body('iin') iin: string) {
  //   return this.iinService.validate(iin);
  // }

  // @Post()
  // async create(@Body() dto: CreateIinDto) {
  //   this.iinService.create(dto);
  // }

  @Post('country')
  async create() {
    return null;
  }
}
