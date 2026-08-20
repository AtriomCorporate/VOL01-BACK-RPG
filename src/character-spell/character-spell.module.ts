import { Module } from '@nestjs/common';
import { CharacterSpellService } from './character-spell.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterSpell } from './character-spell.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterSpell])],
  providers: [CharacterSpellService],
  exports: [CharacterSpellService],
})
export class CharacterSpellModule {}
