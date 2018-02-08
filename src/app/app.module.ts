import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { MenuComponent } from './menu/menu.component';
import { NotesService } from './notes.service';
import { SelectOnShowDirective } from './select-on-show.directive';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
    MenuComponent,
    SelectOnShowDirective,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
