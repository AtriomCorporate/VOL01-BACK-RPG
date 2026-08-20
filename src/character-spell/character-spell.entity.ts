import { PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Character } from '../characters/characters.entity';
import { Spells } from '../spells/spells.entity';

export class CharacterSpell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  characterId: number;

  @ManyToOne(() => Character)
  @JoinColumn({ name: 'characterId' })
  character: Character;

  @Column()
  spellId: number;

  @ManyToOne(() => Spells)
  @JoinColumn({ name: 'spellId' })
  spell: Spells;
}
