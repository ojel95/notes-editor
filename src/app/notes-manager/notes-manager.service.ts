import { Injectable } from "@angular/core";

import { Note } from './note'

@Injectable({providedIn: 'root'})
export class NotesManagerService {
  notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  addNote(title: string, body: string): void {
    const note = {
      id: Date.now(),
      title: title,
      body: body
    };

    this.notes.push(note);
  }

  editNote(id: number, newTitle: string, newBody: string) {
    const index = this.notes.findIndex((note => note.id == id));

    this.notes[index].title = newTitle;
    this.notes[index].body = newBody;
  }

  deleteNote(id: number): void {
    const index = this.notes.findIndex((note => note.id == id));
  
    this.notes.splice(index, 1);
  }
}