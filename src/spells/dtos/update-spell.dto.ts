import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

export class UpdateSpellDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @Min(0)
  @Max(9)
  @IsOptional()
  level: number;

  @IsString()
  @IsOptional()
  school: string;
}
