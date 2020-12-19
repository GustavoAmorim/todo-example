import { Injectable } from '@angular/core';

import { take } from 'rxjs/internal/operators/take';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private ENDPOINT_URL: string = '';

  private readonly LOCAL_STORAGE_ITEMS_LIST = 'itemsList';

  constructor() {

  }

  public addItem(item: Item): Observable<boolean> {

    return of(this.putItemMockStorage(item));
  }

  public getItemsList(): Observable<Item[]> {

    const items = this.getItemsMockStorage();

    return of(items)
      .pipe(
        take(1),
      );
  }

  private putItemMockStorage(itemNew: Item): boolean {

    const items = this.getItemsMockStorage();

    if (Array.isArray(items)) {

      items.push(itemNew);

      localStorage.setItem(this.LOCAL_STORAGE_ITEMS_LIST, JSON.stringify(items));

      return true;
    }

    return false;
  }

  private getItemsMockStorage() {

    const list = localStorage.getItem(this.LOCAL_STORAGE_ITEMS_LIST);
    return JSON.parse(list);
  }
}
