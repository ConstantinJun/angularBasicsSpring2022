import { Injectable } from '@angular/core';
import books from './shared/books.json'

@Injectable({
  providedIn: 'root'
})
export class BooksManagerService {
  books: any = books;
  authorOutput: number;

  constructor() {
  }

  viewTest(){
    return this.authorOutput;
  }

}
