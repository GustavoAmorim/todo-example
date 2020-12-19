import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialImportsModule } from 'src/angular-material/angular-material-imports.module';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [

    ItemComponent,
    ItemsListComponent
  ],
  imports: [

    CommonModule,

    FlexLayoutModule,
    AngularMaterialImportsModule,
  ]
})
export class TodoModule { }
