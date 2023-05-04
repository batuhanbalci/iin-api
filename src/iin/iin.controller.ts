import { Controller, Get, Query } from '@nestjs/common';
import { FindUniqueDto, PaginationQueryDto } from 'src/iin/dto/query.dto';
import { IinService } from './iin.service';

@Controller('iin')
export class IinController {
  constructor(private iinService: IinService) {}

  @Get('all')
  async findAll(@Query() query: PaginationQueryDto) {
    return this.iinService.findAll(query.skip, query.take);
  }

  @Get()
  async findOne(@Query() query: FindUniqueDto) {
    return this.iinService.findOne(query.bin);
  }

  @Get('issuer')
  async findManyByIssuer(@Query('issuer') issuer: string) {
    return this.iinService.findManyByIssuer(issuer);
  }
}
