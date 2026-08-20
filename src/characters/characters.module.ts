import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './characters.entity';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { CharacterItemModule } from '../character-item/character-item.module';
import { ObjectsModule } from '../objects/objects.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]),
    CampaignsModule,
    CharacterItemModule,
    ObjectsModule,
  ],
  providers: [CharactersService],
  controllers: [CharactersController],
  exports: [CharactersService],
})
export class CharactersModule {}
