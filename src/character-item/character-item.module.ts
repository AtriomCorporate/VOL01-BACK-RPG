import { Module } from '@nestjs/common';
import { CharacterItemService } from './character-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterItem } from './character-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterItem])],
  providers: [CharacterItemService],
})
export class CharacterItemModule {}
