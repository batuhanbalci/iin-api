import { Bank, CardScheme, CardType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { CreateBankDto } from './create-bank.dto';
import { CreateCardSchemeDto } from './create-card-scheme.dto';

export class CreateIinDto {
  @IsNotEmpty()
  @IsString()
  readonly iinStart: string;

  @IsOptional()
  @IsString()
  readonly iinEnd: string;

  @IsEnum(CardType)
  readonly type: CardType;

  @IsOptional()
  @IsBoolean()
  readonly isPrepaid: boolean;

  @IsOptional()
  @IsNumber()
  readonly numberLength: number;

  @IsOptional()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  readonly countryCode: string;

  @ValidateIf((o) => o.cardScheme === undefined)
  @IsMongoId()
  readonly cardScehemeId: string;

  @ValidateIf((o) => o.cardScehemeId === undefined)
  @Type(() => CreateCardSchemeDto)
  @ValidateNested({ each: true })
  readonly cardScheme: CardScheme;

  @ValidateIf((o) => o.bank === undefined)
  @IsMongoId()
  readonly bankId: string;

  @ValidateIf((o) => o.bankId === undefined)
  @Type(() => CreateBankDto)
  @ValidateNested({ each: true })
  readonly bank: Bank;
}
