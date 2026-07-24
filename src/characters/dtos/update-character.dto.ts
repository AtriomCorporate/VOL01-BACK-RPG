import {
  IsString,
  IsInt,
  IsOptional,
  Min,
  Max,
  MinLength,
} from 'class-validator';

export class UpdateCharacterDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  race: string;

  @IsString()
  @IsOptional()
  characterClass: string;

  @IsInt()
  @Min(1)
  @Max(20)
  @IsOptional()
  level: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  maxHp: number;

  @IsString()
  @IsOptional()
  avatarUrl: string;
}
