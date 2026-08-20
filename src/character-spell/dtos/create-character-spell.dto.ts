import { IsInt } from 'class-validator';

export class CreateCharacterSpellDto {
  @IsInt()
  spellId: number;
}
