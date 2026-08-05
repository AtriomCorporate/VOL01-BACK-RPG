import { Injectable } from '@nestjs/common';
import { CharactersService } from '../characters/characters.service';
import { CampaignsService } from '../campaigns/campaigns.service';
import { Character } from '../characters/characters.entity';
import { Campaign } from '../campaigns/campaigns.entity';

@Injectable()
export class UploadService {
  constructor(
    private charactersService: CharactersService,
    private campaignsService: CampaignsService,
  ) {}

  salvarCharacter(file: Express.Multer.File, charId: number, id: number) {
    const url: Partial<Character> = { avatarUrl: file.filename };
    return this.charactersService.update(charId, id, url);
  }

  salvarCampaign(file: Express.Multer.File, campId: number, id: number) {
    const url: Partial<Campaign> = { bannerUrl: file.filename };
    return this.campaignsService.update(url, campId, id);
  }
}
