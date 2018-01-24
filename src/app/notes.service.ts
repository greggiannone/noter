import { Injectable } from '@angular/core';
import { Note } from './note';
@Injectable()
export class NotesService {

  notes: Note[];
  selectedNote: Note;
  currId: number;

  constructor() { 
    this.notes = [
      { id: 1, title: 'Amazing note', text: 'This is such an amazing note!!!!' },
      { id: 2, title: 'Garbage note', text: 'This is a garbage note' },
      { id: 3, title: 'Note', text: 'This sure is a note' },
      { id: 4, title: 'Final note', text: 'My final note lies here' },
    ];

    this.selectedNote = this.notes[0];
    this.currId = 4;
  }
  
  getNotes()
  {
    return this.notes;
  }

  getSelectedNote()
  {
    return this.selectedNote;
  }

  setSelectedNote(note: Note)
  {
    this.selectedNote = note;
  }

  createNote(): Note
  {
    this.notes.push({ id: ++this.currId, title: 'New Note', text: ''});
    return this.notes[this.currId - 1];
  }

  deleteSelectedNote()
  {
    var index = this.notes.indexOf(this.selectedNote);
    if (index > -1)
    {
      this.notes.splice(index, 1);
    }
    if (index < this.notes.length)
    {
      this.selectedNote = this.notes[index];
    }
    else
    {
      this.selectedNote = this.notes[index - 1];
    }
  }
}
