import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { LeftSectionComponent } from './section/left-section/left-section.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    BookListComponent,
    BookItemComponent,
    LeftSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
