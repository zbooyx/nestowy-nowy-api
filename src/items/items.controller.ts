import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  crate(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, wcale nie jest ${createItemDto.qty}`;
  }
}
