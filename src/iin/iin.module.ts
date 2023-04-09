import { Module } from '@nestjs/common';
import { IinController } from './iin.controller';
import { IinService } from './iin.service';

@Module({
  controllers: [IinController],
  providers: [IinService],
})
export class IinModule {}
