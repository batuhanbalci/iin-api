import { Injectable } from '@nestjs/common';
import { IssuerIdentificationNumber } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIinDto } from './dto/create-iin.dto';

@Injectable()
export class IinService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateIinDto): Promise<IssuerIdentificationNumber> {
    const iin = await this.prisma.issuerIdentificationNumber.create({
      data: {
        iinStart: dto.iinStart,
        iinEnd: dto.iinEnd,
        countryCode: dto.countryCode,
        type: dto.type,
        isPrepaid: dto.isPrepaid,
        numberLength: dto.numberLength,
        brand: dto.brand,
        cardScheme: {
          connectOrCreate: {
            where: {
              id: dto.cardScehemeId ?? '63d18bfa32fa006ae4008529',
            },
            create: {
              name: dto.cardScheme.name,
            },
          },
        },
        bank: {
          connectOrCreate: {
            where: {
              id: dto.bankId ?? '63d18bfa32fa006ae4008529',
            },
            create: {
              name: dto.bank.name,
              url: dto.bank.url,
            },
          },
        },
      },
    });

    return iin;
  }
}
