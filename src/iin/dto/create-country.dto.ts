import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  readonly code1: string;

  @IsNotEmpty()
  @IsString()
  readonly code2: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
