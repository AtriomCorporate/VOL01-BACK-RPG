import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Character } from '../characters/characters.entity';
import { Items } from '../items/items.entity';

export class CharacterItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Character, (instance) => instance.id)
  characterId: number;

  @ManyToOne(() => Items, (instance) => instance.id)
  itemId: number;

  @Column()
  quantity: number;

  @Column()
  equipped: boolean;
}
