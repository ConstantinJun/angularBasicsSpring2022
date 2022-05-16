import { Component, OnInit } from '@angular/core';
import {BooksManagerService} from "../books-manager.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    mochaBooks: {}[];

  constructor(private service: BooksManagerService) {
    this.mochaBooks = service.books;
  }

  ngOnInit(): void {
  }

}
