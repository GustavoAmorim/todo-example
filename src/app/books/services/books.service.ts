import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  readonly api = 'https://reactnd-books-api.udacity.com';

  private _token;
  private _headers;

  constructor(private httpClient: HttpClient) {

    // Generate a unique token for storing your bookshelf data on the backend server.
    this._token = localStorage.token
    if (!this._token) {
      this._token = localStorage.token = Math.random().toString(36).substr(-8)
    }

    this._headers = {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this._token
      })
    };
  }

  getBook(bookId) {

    return this.httpClient.get<any[]>(`${this.api}/books/${bookId}`, this._headers).toPromise();
  }

  getAll() {

    return this.httpClient.get<any[]>(`${this.api}/books`, this._headers)
      .toPromise()
      .then(result => {

        if (result && result['books']) {

          return result['books'];
        }
      });
  }

/*
  update(book, shelf) {

    fetch(`${this.api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json())
  }

  search(query) {

    fetch(`${this.api}/search`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }).then(res => res.json())
      .then(data => data.books)
  }
*/
}
