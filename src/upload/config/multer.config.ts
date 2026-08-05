import { ConflictException, Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import { fileTypeFromBuffer } from 'file-type';
import fs from 'fs';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: process.env.MULTER_DEST,
        filename: (req, file, cb) => {
          const fileName =
            path.parse(file.originalname).name.replace(/\s/g, '') +
            '-' +
            uuidv4();

          const extension = path.parse(file.originalname).ext;
          cb(null, `${fileName}${extension}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];

        if (!file || !allowedTypes.includes(file.mimetype))
          cb(new ConflictException('Invalid file type'), false);

        cb(null, true);
      },
    };
  }
}
