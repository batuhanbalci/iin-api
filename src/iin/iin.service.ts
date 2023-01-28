import { Injectable } from '@nestjs/common';
import { IssuerIdentificationNumber } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIinDto } from './dto/create-iin.dto';

@Injectable()
export class IinService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<IssuerIdentificationNumber[]> {
    return this.prisma.issuerIdentificationNumber.findMany();
  }

  async create(dto: CreateIinDto): Promise<IssuerIdentificationNumber> {
    try {
      const iin = await this.prisma.issuerIdentificationNumber.create({
        data: {
          iinStart: dto.iinStart,
          iinEnd: dto.iinEnd,
          countryCode: dto.countryCode,
          type: dto.type,
          isPrepaid: dto.isPrepaid,
          numberLength: dto.numberLength,
          brand: dto.brand,
          scheme: dto.scheme,
          bank: dto.bank,
        },
      });

      return iin;
    } catch (error) {
      console.error(error);
    }
  }
}
