import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IinModule } from './iin/iin.module';

@Module({
  imports: [IinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
