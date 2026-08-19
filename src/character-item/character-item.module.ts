import { Module } from '@nestjs/common';
import { CharacterItemService } from './character-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterItem } from './character-item.entity';
import { ItemsModule } from '../items/items.module';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterItem]), ItemsModule],
  providers: [CharacterItemService],
  exports: [CharacterItemService],
})
export class CharacterItemModule {}
