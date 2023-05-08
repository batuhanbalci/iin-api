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

  async validate(bin: number) {
    const card = await this.prisma.card.findUnique({
      where: { bin: bin },
    });

    if (card === null) {
      return {
        valid: false,
      };
    } else {
      delete card.id;
      return {
        valid: true,
        card: card,
      };
    }
  }

  async findManyByIssuer(issuer: string) {
    return await this.prisma.card.findMany({
      where: {
        issuer: {
          contains: issuer,
        },
      },
    });
  }
}
