import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { Repository } from 'typeorm';
import { ObjectsService } from '../objects/objects.service';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items) private repo: Repository<Items>,
    private objectsService: ObjectsService,
  ) {}

  async create(parcialItem: Partial<Items>) {
    this.objectsService.instantiateVar(parcialItem);
    const item = this.repo.create(parcialItem);

    return this.repo.save(item);
  }

  findAll() {
    return this.repo.find({ where: { isActive: true } });
  }
}
