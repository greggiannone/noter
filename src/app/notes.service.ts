import { Injectable } from '@angular/core';
import { Note } from './note';
@Injectable()
export class NotesService {

  notes: Note[];
  selectedNote: Note;
  currId: number;

  constructor() { 
    this.notes = [
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
      new Note(++this.currId, 'One Note', ''),
      new Note(++this.currId, 'Two Note', ''),
      new Note(++this.currId, 'Red Note', ''),
      new Note(++this.currId, 'Blue Note', ''),
    ];

    this.selectedNote = this.notes[0];
    this.currId = this.notes.length;
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
    this.notes.push(new Note(++this.currId, 'New Note', ''));
    console.log(this.currId);
    return this.notes[this.notes.length - 1];
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
