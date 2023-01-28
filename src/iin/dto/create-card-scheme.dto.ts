import { IsNotEmpty } from 'class-validator';

export class CreateCardSchemeDto {
  @IsNotEmpty()
  readonly name: string;
}
