import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from '../note'
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[];
  @Input()
  set toggleRename(toggleRename: boolean)
  {
    if (toggleRename)
    {
      this.renameNote();
    }
  }
  @Input()
  set selectedNote(selectedNote: Note)
  {
    console.log('here');
    this.setSelectedNote(selectedNote);
  }
  get selectedNote()
  {
    return this._selectedNote;
  }

  @Output() onSelectionChanged = new EventEmitter();
  @Output() onRenameComplete = new EventEmitter();

  oldName: string;
  renamingNote: boolean;

  private _selectedNote: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit() 
  {
  }

  renameNote()
  {
    if (this.selectedNote == null)
    {
      return;
    }

    this.renamingNote = true;
    this.oldName = this.selectedNote.noteData.title;
  }

  onSelect(note: Note)
  {
    this.selectedNote = note;
  }
  
  private setSelectedNote(note: Note)
  {
    if (note != this.selectedNote)
    {
      this._selectedNote = note;
      this.stopRenaming();
      this.onSelectionChanged.emit(note);
    }
  }

  onEnter()
  {
    this.stopRenaming();
  }

  // Will set the note's title if the title isn't blank and toggle the edit box
  private stopRenaming()
  {
    if (!this.renamingNote)
    {
      return;
    }

    if (this.selectedNote.noteData.title == '')
    {
      this.selectedNote.noteData.title = this.oldName;
    }

    this.oldName = '';
    this.renamingNote = false;
    this.onRenameComplete.emit();
  }
}
