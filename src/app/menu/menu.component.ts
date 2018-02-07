import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() newNoteAdded = new EventEmitter;
  @Output() deleteSelectedNote = new EventEmitter;
  @Output() renameSelectedNote = new EventEmitter;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  createNote()
  {
    let newNote = this.notesService.createNote();
    this.newNoteAdded.emit(newNote);
  }

  deleteNote()
  {
    this.notesService.deleteSelectedNote();
    this.deleteSelectedNote.emit();
  }

  renameNote()
  {
    this.renameSelectedNote.emit();
  }

  saveNote()
  {

  }
}
