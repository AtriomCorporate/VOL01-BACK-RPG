import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { ObjectsService } from '../objects/objects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './characters.entity';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { CharacterItemModule } from '../character-item/character-item.module';
import { CharacterItem } from '../character-item/character-item.entity';
import { CharacterItemService } from '../character-item/character-item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]),
    CampaignsModule,
    CharacterItemModule,
  ],
  providers: [CharactersService, ObjectsService],
  controllers: [CharactersController],
  exports: [CharactersService],
})
export class CharactersModule {}
