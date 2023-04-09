import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IinModule } from './iin/iin.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    PrismaModule,
    IinModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
