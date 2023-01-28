import { IsNotEmpty } from 'class-validator';

export class CreateBankDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly url: string;
}
