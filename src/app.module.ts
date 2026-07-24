import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CharactersModule } from './characters/characters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { ObjectsService } from './objects/objects.service';
import dbConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig],
    }),
    TypeOrmModule.forRootAsync(dbConfig.asProvider()),
    CharactersModule,
    UsersModule,
    CampaignsModule,
    HealthModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ObjectsService],
})
export class AppModule {}
