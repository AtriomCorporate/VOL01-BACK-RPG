import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

import { MulterModule } from '@nestjs/platform-express';

import { MulterConfigService } from './config/multer.config';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { CharactersModule } from '../characters/characters.module';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
    CampaignsModule,
    CharactersModule,
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
