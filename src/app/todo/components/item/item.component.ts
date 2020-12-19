import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemParam: Item;

  private _store: Item;

  constructor() { }

  ngOnInit(): void {

    if (this.itemParam) {

      this._store = this.itemParam;
    }
  }

  get itemLabel() {

    return this._store.label;
  }
}
