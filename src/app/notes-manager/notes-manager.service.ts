/**
 * Declaration of the notes operations manager service.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { Injectable } from "@angular/core";

import { Note } from './note'

/**
 * Service that provides the methods to manage the application's notes.
 */
@Injectable({providedIn: 'root'})
export class NotesManagerService {
  notes: Note[] = [];

  /**
   * Gets all the existent notes.
   * 
   * @returns The notes collection.
   */
  getAllNotes(): Note[] {
    return this.notes;
  }

  /**
   * Gets an specific note.
   * 
   * @param id The note to retrieve unique identifier.
   * 
   * @returns The note with the specified identifier.
   */
  getNote(id: number): Note {
    return this.notes.find(note => note.id == id);
  }

  /**
   * Adds a new note to the collection.
   * 
   * @param title The note's title.
   * @param body  The note's body.
   */
  addNote(title: string, body: string): void {
    const note = {
      id: Date.now(),
      title: title,
      body: body
    };

    this.notes.push(note);
  }

  /**
   * Edits title and body of the specified note.
   * 
   * @param id The note to modify unique identifier.
   * @param newTitle The new title to set.
   * @param newBody The new body to set.
   */
  editNote(id: number, newTitle: string, newBody: string): void {
    const index = this.notes.findIndex((note => note.id == id));

    this.notes[index].title = newTitle;
    this.notes[index].body = newBody;
  }

  /**
   * Deletes the specified note.
   * 
   * @param id The note to delete unique identifier.
   */
  deleteNote(id: number): void {
    const index = this.notes.findIndex((note => note.id == id));
  
    this.notes.splice(index, 1);
  }
}