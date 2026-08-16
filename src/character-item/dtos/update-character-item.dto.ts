import { IsInt, IsBoolean } from 'class-validator';

export class UpdateCharacterItemDto {
  @IsInt()
  quantity: number;

  @IsBoolean()
  equipped: boolean;
}
