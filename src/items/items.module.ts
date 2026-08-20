import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { ObjectsModule } from '../objects/objects.module';

@Module({
  imports: [TypeOrmModule.forFeature([Items]), ObjectsModule],
  providers: [ItemsService],
  controllers: [ItemsController],
  exports: [ItemsService],
})
export class ItemsModule {}
