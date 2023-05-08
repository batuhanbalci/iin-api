import { Controller, Get, Query } from '@nestjs/common';
import { PaginationQueryDto, ValidateQueryDto } from 'src/iin/dto/query.dto';
import { IinService } from './iin.service';

@Controller('/')
export class IinController {
  constructor(private iinService: IinService) {}

  @Get('all')
  async findAll(@Query() query: PaginationQueryDto) {
    return this.iinService.findAll(query.skip, query.take);
  }

  @Get('validate')
  async findOne(@Query() query: ValidateQueryDto) {
    return this.iinService.validate(query.bin);
  }

  @Get('issuer')
  async findManyByIssuer(@Query('issuer') issuer: string) {
    return this.iinService.findManyByIssuer(issuer);
  }
}
