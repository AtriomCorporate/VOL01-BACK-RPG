import { IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateCharacterItemDto {
  @IsInt()
  itemId: number;

  @IsInt()
  quantity: number;

  @IsBoolean()
  @IsOptional()
  equipped: boolean;
}
