import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedNote: Note;
  renamingNote: boolean;
  notes: Note[];

  constructor(private notesService: NotesService) { }

  ngOnInit() 
  {
    this.notes = this.notesService.getNotes();
    this.selectedNote = this.notesService.notes[1];
  }

  onSelect(note: Note)
  {
    this.setSelectedNote(note);
    this.notesService.setSelectedNote(note);
  }

  refreshNotes()
  {
    this.setSelectedNote(this.notesService.getSelectedNote());
  }

  renameNote()
  {
    this.renamingNote = true;
  }

  onEnter()
  {
    this.renamingNote = false;
  }
  
  private setSelectedNote(note: Note)
  {
    if (note != this.selectedNote)
    {
      this.renamingNote = false;
      this.selectedNote = note;
    }
  }
}
