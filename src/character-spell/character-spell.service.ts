import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterSpell } from './character-spell.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterSpellService {
  constructor(
    @InjectRepository(CharacterSpell) private repo: Repository<CharacterSpell>,
  ) {}

  create(charId: number, newSpell: Partial<CharacterSpell>) {
    newSpell.characterId = charId;

    const spell = this.repo.create(newSpell);

    if (!spell) throw new ConflictException();

    return this.repo.save(newSpell);
  }

  async findOne(charId: number, spellId: number) {
    const spell = await this.repo.findOne({
      where: { characterId: charId, spellId: spellId },
    });

    if (!spell) throw new NotFoundException();

    return spell;
  }

  async delete(charId: number, spellId: number) {
    const spell = await this.findOne(charId, spellId);

    return await this.repo.delete(spell);
  }
}
