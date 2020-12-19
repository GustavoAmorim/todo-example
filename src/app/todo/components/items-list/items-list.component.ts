import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';

import { Item } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private itemsServices: ItemsService) { }

  ngOnInit(): void {
  }

  get getItems(): Item[] {

    return [
      {
        id: 1,
        label: 'Teste 1',
        matIcon: 'menu'
      },
      {
        id: 2,
        label: 'Teste 2',
        matIcon: 'apps'
      }
    ];
  }

}
