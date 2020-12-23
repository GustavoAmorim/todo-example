import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingBooksComponent } from './components/reading-books/reading-books.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ReadingBooksComponent],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class BooksModule { }
