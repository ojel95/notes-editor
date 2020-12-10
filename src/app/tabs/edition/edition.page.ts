/**
 * Declaration of edition page.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotesManagerService } from 'src/app/notes-manager/notes-manager.service';

/**
 * Implements the edition tab page's logic.
 */
@Component({
  selector: 'app-edition',
  templateUrl: 'edition.page.html',
  styleUrls: ['edition.page.scss']
})
export class EditionPage implements OnInit {
  noteId: number;
  noteTitle: string;
  noteBody: string;

  /**
   * Initializes a new instance of the EditionPage class.
   * 
   * @param activatedRoute Provides access to information about a route associated with
   * a component that is loaded in an outlet.
   * @param notesService The notes manager service.
   */
  constructor(private activatedRoute: ActivatedRoute, private notesService: NotesManagerService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.noteId = parseInt(params.get('id'));
    })
  }

  /**
   * Occurs immediately after the default change detector has checked the directive's data-bound properties
   * for the first time, and before any of the view or content children have been checked.
   */
  ngOnInit(): void {
    const currentNote = this.notesService.getNote(this.noteId);

    this.noteTitle = currentNote.title;
    this.noteBody = currentNote.body;
  }

  /**
   * Occurs when the "Save" button is clicked.
   */
  onSaveClicked(): void {
    this.notesService.editNote(this.noteId, this.noteTitle, this.noteBody);
  }
}
