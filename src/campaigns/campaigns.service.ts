import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaigns.entity';
import { ObjectsService } from '../objects/objects.service';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign) private repo: Repository<Campaign>,
    private objectsService: ObjectsService,
  ) {}

  async create(body: Partial<Campaign>, userId: number): Promise<Campaign> {
    this.objectsService.instantiateVar(body);

    body.userId = userId;

    const campaign = await this.repo.create(body);

    return this.repo.save(campaign);
  }

  async findAll(pageNumber: number): Promise<Campaign[]> {
    if (pageNumber <= 0) {
      throw new BadRequestException('index out of range');
    }
    const campaigns = await this.repo.find({
      take: 20,
      skip: (pageNumber - 1) * 20,
    });
    if (campaigns.length === 0) {
      throw new BadRequestException('index out of range');
    }
    return campaigns;
  }

  async findById(id: number): Promise<Campaign> {
    const campaign = await this.repo.findOne({
      where: { id: id },
    });
    if (!campaign) {
      throw new NotFoundException('campaign not found');
    }
    return campaign;
  }

  async update(
    attrs: Partial<Campaign>,
    id: number,
    userId: number,
  ): Promise<Campaign> {
    const campaign = await this.findById(id);

    this.checkCampaignOwner(campaign.userId, userId);

    if (!campaign.isActive) {
      throw new ForbiddenException('Campaign was deleted');
    }

    this.objectsService.updateVar(attrs);

    Object.assign(campaign, attrs);

    return this.repo.save(campaign);
  }

  async remove(id: number, userId: number) {
    this.checkCampaignOwner(id, userId);

    const campaign = await this.findById(id);

    if (!campaign.isActive) {
      throw new ForbiddenException('Campaign was deleted');
    }

    this.checkCampaignOwner(id, userId);

    campaign.isActive = false;

    this.objectsService.updateVar(campaign);

    this.repo.save(campaign);
  }

  checkCampaignOwner(ownerId: number, userId: number) {
    if (ownerId !== userId) {
      throw new ForbiddenException('user does not have the permission');
    }
  }
}
