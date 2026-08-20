import { registerAs } from '@nestjs/config';
import { Character } from '../characters/characters.entity';
import { User } from '../users/users.entity';
import { Campaign } from '../campaigns/campaigns.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Items } from '../items/items.entity';
import { CharacterItem } from '../character-item/character-item.entity';
import { Spells } from '../spells/spells.entity';
import { CharacterSpell } from '../character-spell/character-spell.entity';

export default registerAs('db', (): TypeOrmModuleOptions => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  type: 'postgres',
  entities: [
    User,
    Character,
    Campaign,
    Items,
    CharacterItem,
    Spells,
    CharacterSpell,
  ],
  synchronize: true,
}));
