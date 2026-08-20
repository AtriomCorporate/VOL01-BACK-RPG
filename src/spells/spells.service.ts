import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Spells } from './spells.entity';
import { Repository } from 'typeorm';
import { ObjectsService } from '../objects/objects.service';

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spells) private repo: Repository<Spells>,
    private objectsService: ObjectsService,
  ) {}

  create(attrs: Partial<Spells>) {
    this.objectsService.instantiateVar(attrs);

    const spell = this.repo.create(attrs);

    return this.repo.save(spell);
  }

  async findOne(id: number) {
    const spell = await this.repo.findOne({ where: { id: id } });

    if (!spell) throw new NotFoundException();

    return spell;
  }

  async findAll() {
    const spells = await this.repo.find({ where: { isActive: true } });

    if (!spells) throw new NotFoundException();

    return spells;
  }

  async update(id: number, attrs: Partial<Spells>) {
    const spell = await this.findOne(id);

    Object.assign(spell, attrs);

    this.objectsService.updateVar(spell);

    return this.repo.save(spell);
  }

  async delete(id: number) {
    const spell = await this.findOne(id);

    if (!spell.isActive) throw new ConflictException();

    spell.isActive = false;

    await this.repo.save(spell);
  }
}
