import { IsInt, IsBoolean, IsOptional } from 'class-validator';

export class UpdateCharacterItemDto {
  @IsInt()
  @IsOptional()
  quantity: number;

  @IsBoolean()
  @IsOptional()
  equipped: boolean;
}
