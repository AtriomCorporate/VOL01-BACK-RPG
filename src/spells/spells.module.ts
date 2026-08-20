import { Module } from '@nestjs/common';
import { SpellsController } from './spells.controller';
import { SpellsService } from './spells.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spells } from './spells.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spells])],
  providers: [SpellsService],
  controllers: [SpellsController],
})
export class SpellsModule {}
