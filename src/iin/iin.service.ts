import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IinService {
  constructor(private prisma: PrismaService) {}

  async findAll(skip: number, take: number) {
    if (skip === undefined) skip = 0;
    if (take === undefined) take = 10;
    return await this.prisma.card.findMany({
      skip: skip,
      take: take,
    });
  }

  async findOne(bin: number) {
    return await this.prisma.card.findUnique({
      where: { bin: bin },
    });
  }

  async findManyByIssuer(issuer: string) {
    return await this.prisma.card.findMany({
      where: { issuer: issuer },
    });
  }
}
