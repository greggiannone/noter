import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { NotesService } from '../notes.service';
import { NoteData } from '../notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes: Note[];
  selectedNote: Note;
  toggleRename: boolean;

  constructor(private notesService: NotesService) 
  { 
    this.notes = [];
  }

  ngOnInit() 
  {
    this.refreshNotes()
    if (this.notes.length > 0)
    {
      this.selectedNote = this.notes[0];
    }
  }

  // Gets all the notes from the server then sets a note
  refreshNotes()
  {

    // Create the list of notes by converting the note datas to notes
    this.notesService.getNotes().subscribe(noteDatas =>
      {
        this.notes.splice(0, this.notes.length);
        for (let noteData of noteDatas)
        {
          this.notes.push(new Note(noteData));
        }
      });
  }
  selectionChanged(note: Note)
  {
    this.selectedNote = note;
  }

  addNote()
  {
    let newNote = new Note({ title: 'New Note' } as NoteData);
    this.notes.push(newNote);
    this.selectionChanged(newNote);
    this.notesService.createNote('New Note').subscribe(noteData => newNote.noteData.id = noteData.id);
  }

  deleteNote()
  {
    // delete selected note
  }

  renameNote()
  {
    this.toggleRename = true;
  }
  
  saveNote()
  {
    if (this.selectedNote == null)
    {
      return;
    }

    this.selectedNote.applyChanges();
  }
  
  onRenameComplete()
  {
    this.toggleRename = false;
  }
}
