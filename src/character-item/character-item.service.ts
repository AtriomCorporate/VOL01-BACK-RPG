import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterItem } from './character-item.entity';
import { ItemsService } from '../items/items.service';
import { CreateCharacterItemDto } from './dtos/create-character-item.dto';

@Injectable()
export class CharacterItemService {
  constructor(
    @InjectRepository(CharacterItem) private repo: Repository<CharacterItem>,
    private itemsService: ItemsService,
  ) {}

  create(idChar: number, body: Partial<CharacterItem>) {
    body.characterId = idChar;
    const characterItem = this.repo.create(body);

    return this.repo.save(characterItem);
  }
}
