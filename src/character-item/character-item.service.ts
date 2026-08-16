import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(idChar: number, body: Partial<CharacterItem>) {
    const item = await this.itemsService.findOne(body.itemId!);

    if (!item) throw new NotFoundException('Item not found');

    body.characterId = idChar;

    const characterItem = this.repo.create(body);

    return this.repo.save(characterItem);
  }

  async find(idChar: number, idItem: number) {
    const item = await this.repo.findOne({
      where: { itemId: idItem, characterId: idChar },
    });

    if (!item) {
      throw new NotFoundException();
    }

    return item;
  }

  async update(attrs: Partial<CharacterItem>, idChar: number, idItem: number) {
    const item = await this.find(idChar, idItem);

    Object.assign(item, attrs);

    return this.repo.save(item);
  }

  async delete(idChar: number, idItem: number) {
    const item = await this.find(idChar, idItem);

    this.repo.remove(item);

    return this.repo.save(item);
  }
}
