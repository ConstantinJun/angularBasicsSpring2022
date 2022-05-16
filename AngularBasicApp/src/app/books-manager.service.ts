import { Injectable } from '@angular/core';
import books from './shared/books.json'

@Injectable({
  providedIn: 'root'
})
export class BooksManagerService {
  books: any = books;

  constructor() {
  }
}
