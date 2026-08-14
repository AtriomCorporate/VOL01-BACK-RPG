import { IsString, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(80)
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsString()
  type: string;
}
