import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';
import { Character } from '../characters/characters.entity';
import { Items } from '../items/items.entity';

@Entity()
export class CharacterItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  characterId: number;

  @ManyToOne(() => Character)
  @JoinColumn({ name: 'characterId' })
  character: Character;

  @Column()
  itemId: number;

  @ManyToOne(() => Items)
  @JoinColumn({ name: 'itemId' })
  item: Items;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  equipped: boolean;
}
