import {
  Controller,
  Post,
  Req,
  Param,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UploadService } from './upload.service';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';

@Controller('upload')
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('avatar/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileCharacter(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Param('id') charId: number,
  ) {
    return this.uploadService.salvarCharacter(file, charId, req.user.id);
  }

  @Post('campaign-banner/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadCampaignBanner(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Param('id') campId: number,
  ) {
    return this.uploadService.salvarCampaign(file, campId, req.user.id);
  }
}
