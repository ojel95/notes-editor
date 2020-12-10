/**
 * Declaration of review page.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { Component, OnInit } from '@angular/core';

import { Note } from '../../notes-manager/note';
import { NotesManagerService } from '../../notes-manager/notes-manager.service';

/**
 * Implements the review tab page's logic.
 */
@Component({
  selector: 'app-review',
  templateUrl: 'review.page.html',
  styleUrls: ['review.page.scss']
})
export class ReviewPage implements OnInit {
  notes: Note[];
  filter = '';

  /**
   * Initializes a new instance of the ReviewPage class.
   * 
   * @param notesService The notes manager service.
   */
  constructor(private notesService: NotesManagerService) {
  }

  /**
   * Occurs immediately after the default change detector has checked the directive's data-bound properties
   * for the first time, and before any of the view or content children have been checked.
   */
  ngOnInit() {
    this.notes = this.notesService.getAllNotes();
  }

  /**
   * Occurs when the "Delete" button is clicked.
   */
  onDeleteClicked(id: number): void {
    this.notesService.deleteNote(id);
  }
}
