import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-reading-books',
  templateUrl: './reading-books.component.html',
  styleUrls: ['./reading-books.component.scss']
})
export class ReadingBooksComponent implements OnInit {

  books: any[];

  constructor(private booksService: BooksService) {

    this.booksService.getAll().then(books => {

      this.books = books;
    });
  }

  ngOnInit(): void {
  }

  get getItems() {

    return this.books;
  }

  getItemName(item) {

    return item['title'];
  }
}
