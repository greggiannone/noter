export class Note {
    static readonly MaxLength = 20;
    title: string;
    text: string;
    readonly id: number;

    constructor(id: number, title: string, text: string)
    {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    getDisplayTitle() : string
    {
        if (this.title.length < Note.MaxLength)
        {
            return this.title;
        }
        else
        {
            return this.title.substring(0, Note.MaxLength) + '...';
        }

    }
}