import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dtos/create-item.dto';

@UseGuards(JwtAuthGuard)
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post()
  createItem(@Body() body: CreateItemDto) {
    return this.itemsService.create(body);
  }

  @Get()
  returnItems() {
    return this.itemsService.findAll();
  }
}
