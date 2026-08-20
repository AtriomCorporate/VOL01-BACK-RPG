import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
  Req,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';
import { UpdateCharacterDto } from './dtos/update-character.dto';
import { ActiveCampaignGuard } from './guards/active-campaign/active-campaign.guard';
import { CharacterItemService } from '../character-item/character-item.service';
import { CreateCharacterItemDto } from '../character-item/dtos/create-character-item.dto';
import { UpdateCharacterItemDto } from '../character-item/dtos/update-character-item.dto';
import { UserCharacterGuard } from './guards/user-character/user-character.guard';
import { CharacterSpellService } from '../character-spell/character-spell.service';
import { CreateCharacterSpellDto } from '../character-spell/dtos/create-character-spell.dto';

@Controller('characters')
@UseGuards(JwtAuthGuard)
export class CharactersController {
  constructor(
    private charactersService: CharactersService,
    private characterItemService: CharacterItemService,
    private characterSpellService: CharacterSpellService,
  ) {}

  @UseGuards(ActiveCampaignGuard)
  @Post()
  createCharacter(@Req() req, @Body() body: CreateCharacterDto) {
    return this.charactersService.create(body, req.user.id);
  }

  @Get()
  getAllCharactersFromUser(@Req() req) {
    return this.charactersService.findAll(req.user.id);
  }

  @Get('/:id')
  getCharacterById(@Param('id') id: number, @Req() req) {
    return this.charactersService.findById(id, req.user.id);
  }

  @Patch('/:id')
  updateCharacterById(
    @Param('id') id: number,
    @Req() req,
    @Body() body: UpdateCharacterDto,
  ) {
    return this.charactersService.update(id, req.user.id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  removeCharacterById(@Param('id') id: number, @Req() req) {
    return this.charactersService.remove(id, req.user.id);
  }

  @UseGuards(UserCharacterGuard)
  @Post('/:id/items')
  async createItem(
    @Param('id', ParseIntPipe) charId: number,
    @Body() body: CreateCharacterItemDto,
  ) {
    return this.characterItemService.create(charId, body);
  }

  @UseGuards(UserCharacterGuard)
  @Patch(':id/items/:itemId')
  async updateItem(
    @Param('id') charId: number,
    @Param('itemId') itemId: number,
    @Body() body: UpdateCharacterItemDto,
  ) {
    return this.characterItemService.update(body, charId, itemId);
  }

  @UseGuards(UserCharacterGuard)
  @Delete(':id/items/:itemId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteItem(
    @Param('id') charId: number,
    @Param('itemId') itemId: number,
  ) {
    console.log('charId: %d\nitemId: %d', charId, itemId);
    return this.characterItemService.delete(charId, itemId);
  }

  @UseGuards(UserCharacterGuard)
  @Post('/:id/spells')
  async createSpell(
    @Param('id', ParseIntPipe) charId: number,
    @Body() body: CreateCharacterSpellDto,
  ) {
    return this.characterSpellService.create(charId, body);
  }

  @UseGuards(UserCharacterGuard)
  @Delete('/:id/spells/:spellId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteSpell(
    @Param('id', ParseIntPipe) charId: number,
    @Param('spellId', ParseIntPipe) spellId: number,
  ) {
    return this.characterSpellService.delete(charId, spellId);
  }
}
