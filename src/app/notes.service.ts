import { Injectable,  } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotesService {

  private notesUrl = 'api/notes';

  constructor(private http: HttpClient) { 
 
  }
  
  getNotes(): Observable<NoteData[]>
  {
    return this.http.get<NoteData[]>(this.notesUrl);
  }

  createNote(title: string) : Observable<NoteData>
  {
    let data = { title: title, text: '' } as NoteData;
    return this.http.post<NoteData>(this.notesUrl, data, httpOptions);
  }

  deleteSelectedNote()
  {
    // var index = this.notes.indexOf(this.selectedNote);
    // if (index > -1)
    // {
    //   this.notes.splice(index, 1);
    // }
    // if (this.notes.length == 0)
    // {
    //   this.selectedNote = null;
    // }
    // else if (index < this.notes.length)
    // {
    //   this.selectedNote = this.notes[index];
    // }
    // else
    // {
    //   this.selectedNote = this.notes[index - 1];
    // }
  }
}

export interface NoteData
{
  id: number;
  title: string;
  text: string;
}