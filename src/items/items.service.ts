import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1234456789',
      name: 'Typek44',
      qty: 654,
      description: 'to je nr 4444',
    },
    {
      id: '3333333333',
      name: 'Typek2232',
      qty: 332,
      description: 'to je nr 232323',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return  this.items.find(item =>item.id === id);
  }
}
