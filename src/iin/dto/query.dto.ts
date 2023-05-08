import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PaginationQueryDto {
  @IsInt()
  @Type(() => Number)
  skip: number;

  @IsInt()
  @Type(() => Number)
  take: number;
}

export class ValidateQueryDto {
  @IsInt()
  @Type(() => Number)
  bin: number;
}
