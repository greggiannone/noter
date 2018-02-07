import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { MenuComponent } from './menu/menu.component';
import { NotesService } from './notes.service';
import { SelectOnShowDirective } from './select-on-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
    MenuComponent,
    SelectOnShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
