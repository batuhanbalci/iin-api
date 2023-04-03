import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class IinService {
  constructor(private prisma: PrismaService) {}

  // async validate(iin: string): Promise<IssuerIdentificationNumber[]> {
  //   return '';
  // }

  // async findAll(): Promise<IssuerIdentificationNumber[]> {
  //   return this.prisma.issuerIdentificationNumber.findMany();
  // }

  // async create(dto: CreateIinDto): Promise<IssuerIdentificationNumber> {
  //   try {
  //     const card = await this.prisma.card.create({
  //       data: {},
  //     });

  //     return card;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async createCountry(dto: CreateCountryDto): Promise<Country> {
    try {
      const country = await this.prisma.country.upsert({
        where: {
          name: dto.name,
        },
        update: {
          name: dto.name,
          code1: dto.code1,
          code2: dto.code2,
        },
        create: {
          name: dto.name,
          code1: dto.code1,
          code2: dto.code2,
        },
      });

      return country;
    } catch (error) {
      console.error(error);
    }
  }
}
