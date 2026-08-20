import { Module } from '@nestjs/common';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaigns.entity';
import { ObjectsService } from '../objects/objects.service';
import { ObjectsModule } from '../objects/objects.module';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign]), ObjectsModule],
  controllers: [CampaignsController],
  providers: [CampaignsService],
  exports: [CampaignsService],
})
export class CampaignsModule {}
