import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  parentAuthor;

  constructor() { }

  ngOnInit(): void {
  }

  setAuthor(value:number){
    this.parentAuthor = value;
  }

}
