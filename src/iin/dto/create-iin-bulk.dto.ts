import { CardType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIinDto {
  @IsNotEmpty()
  @IsString()
  readonly iin: string;

  @IsNotEmpty()
  @IsString()
  readonly scheme: string;

  @IsNotEmpty()
  @IsEnum(CardType)
  readonly type: CardType;

  @IsOptional()
  @IsString()
  readonly category: string;

  @IsOptional()
  @IsString()
  readonly issuer: string;

  @IsString()
  readonly cod1: string;

  @IsString()
  readonly code2: string;

  @IsString()
  readonly country: string;
}
