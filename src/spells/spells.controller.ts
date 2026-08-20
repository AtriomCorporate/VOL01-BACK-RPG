import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { SpellsService } from './spells.service';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('spells')
export class SpellsController {
  constructor(private spellsService: SpellsService) {}

  @Post()
  createSpell(@Body() body: CreateSpellDto) {
    return this.spellsService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.spellsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.spellsService.findAll();
  }

  @Patch(':id')
  updateSpell(@Param('id') id: number, @Body() body: UpdateSpellDto) {
    return this.spellsService.update(id, body);
  }

  @Delete(':id')
  deleteSpell(@Param('id') id: number) {
    return this.spellsService.delete(id);
  }
}
