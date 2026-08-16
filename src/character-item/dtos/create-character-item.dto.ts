import { IsInt, IsBoolean } from 'class-validator';

export class CreateCharacterItemDto {
  @IsInt()
  itemId: number;

  @IsInt()
  quantity: number;

  @IsBoolean()
  equipped: boolean;
}
