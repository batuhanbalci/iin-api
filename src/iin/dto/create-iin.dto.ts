import { CardType } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateIinDto {
  @IsNotEmpty()
  @IsString()
  readonly iin: string;

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

  @IsOptional()
  @IsString()
  readonly issuer: string;

  @IsNotEmpty()
  @IsString()
  readonly scheme: string;
}
