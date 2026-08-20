import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

export class CreateSpellDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @Min(0)
  @Max(9)
  level: number;

  @IsString()
  @IsOptional()
  school: string;
}
