import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './todo/components/items-list/items-list.component';
import { ItemComponent } from './todo/components/item/item.component';

const routes: Routes = [

  { path: 'items', component: ItemsListComponent },
  { path: 'item', component: ItemComponent },
  // { path: 'user', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
