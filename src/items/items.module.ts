import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ObjectsService } from '../objects/objects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  providers: [ItemsService, ObjectsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
