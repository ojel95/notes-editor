/**
 * Declaration of addition page.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { NotesManagerService } from '../../notes-manager/notes-manager.service';

/**
 * Implements the addition tab page's logic.
 */
@Component({
  selector: 'app-addition',
  templateUrl: 'addition.page.html',
  styleUrls: ['addition.page.scss']
})
export class AdditionPage {
  noteTitle = '';
  noteBody = '';

  /**
   * Initializes a new instance of the AdditionPage class.
   * 
   * @param notesService The notes manager service.
   * @param alertController The dialog alert controller.
   */
  constructor(private notesService: NotesManagerService, private alertController: AlertController) {
  }

  /**
   * Occurs when the "Add" button is clicked.
   */
  onAddClicked(): void {
    if (this.noteTitle == '' || this.noteBody == '') {
      const alertHeader = 'Empty field';
      const alertMessage = 'Make sure that all fields are filled.';

      this.showAlert(alertHeader, alertMessage)
        .catch(error => console.log('There was an error showing the alert.', error));
    } else {
      this.notesService.addNote(this.noteTitle, this.noteBody);
      this.noteTitle = '';
      this.noteBody = '';
    }
  }

  /**
   * Shows an alert
   * 
   * @param header The alert dialog header.
   * @param message The alert dialog message.
   */
  async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
