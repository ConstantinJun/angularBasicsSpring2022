import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BooksManagerService} from "../../books-manager.service";


@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
 @Output()Author = new EventEmitter<number>();


  constructor(private fb: FormBuilder, private service: BooksManagerService) { }

  FormGroup = this.fb.group({
    booksOption: ['']
  })

  ngOnInit(): void {
  }


  setValue(){
    this.Author.emit(this.FormGroup.controls['booksOption'].value);
  }
}
