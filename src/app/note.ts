import { NoteData } from './notes.service'

export class Note {
    static readonly MaxLength = 20;
    noteData: NoteData;
    editingText: string;
    id: number;

    constructor(noteData: NoteData)
    {
        this.noteData = noteData;
        this.editingText = this.noteData.text;
    }

    getDisplayTitle() : string
    {
        let asterisk = this.isDirty() ? '* ' : '';
        if (this.noteData.title.length < Note.MaxLength)
        {
            return asterisk + this.noteData.title;
        }
        else
        {
            return asterisk + this.noteData.title.substring(0, Note.MaxLength) + '...';
        }

    }

    isDirty(): boolean
    {
        return this.editingText != this.noteData.text;
    }

    applyChanges()
    {
        this.noteData.text = this.editingText;
    }
}