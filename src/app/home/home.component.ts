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
  oldName: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() 
  {
    this.notes = this.notesService.getNotes();
    this.selectedNote = null;
    if (this.notes.length > 0)
    {
      this.selectedNote = this.notes[0];
    }
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
    if (this.selectedNote == null)
    {
      return;
    }

    this.oldName = this.selectedNote.title;
    this.renamingNote = true;
  }

  onEnter()
  {
    this.stopRenaming();
  }
  
  private setSelectedNote(note: Note)
  {
    if (note != this.selectedNote)
    {
      this.stopRenaming();
      this.selectedNote = note;
    }
  }

  private stopRenaming()
  {
    if (!this.renamingNote)
    {
      return;
    }

    if (this.selectedNote.title == '')
    {
      this.selectedNote.title = this.oldName;
    }

    this.oldName = '';
    this.renamingNote = false;

  }
}
