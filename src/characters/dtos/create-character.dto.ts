import {
  IsString,
  IsInt,
  IsOptional,
  Min,
  Max,
  MinLength,
} from 'class-validator';

export class CreateCharacterDto {
  @IsInt()
  campaignId: number;

  @IsString()
  name: string;

  @IsString()
  @MinLength(3)
  race: string;

  @IsString()
  characterClass: string;

  @IsInt()
  @Min(1)
  @Max(20)
  level: number;

  @IsInt()
  @Min(1)
  maxHp: number;

  @IsString()
  @IsOptional()
  avatarUrl: string;
}
