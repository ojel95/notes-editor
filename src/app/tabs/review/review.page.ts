import { Component, OnInit } from '@angular/core';

import { Note } from '../../notes-manager/note';
import { NotesManagerService } from '../../notes-manager/notes-manager.service';

@Component({
  selector: 'app-review',
  templateUrl: 'review.page.html',
  styleUrls: ['review.page.scss']
})
export class ReviewPage implements OnInit {
  notes: Note[];

  constructor(private managerService: NotesManagerService) {
  }

  ngOnInit() {
    this.notes = this.managerService.getAllNotes();
  }
}
