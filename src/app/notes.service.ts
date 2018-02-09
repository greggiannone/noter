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

  deleteNote(id: number)
  {
    const url = '${this.notesUrl}/${id}';
    return this.http.delete<Note>(url, httpOptions);
  }
}

export interface NoteData
{
  id: number;
  title: string;
  text: string;
}