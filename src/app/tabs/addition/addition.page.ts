import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { NotesManagerService } from '../../notes-manager/notes-manager.service';

@Component({
  selector: 'app-addition',
  templateUrl: 'addition.page.html',
  styleUrls: ['addition.page.scss']
})
export class AdditionPage {
  noteTitle = '';
  noteBody = '';

  constructor(private managerService: NotesManagerService, private alertController: AlertController) {
  }

  onAddClicked(): void {
    if (this.noteTitle == '' || this.noteBody == '') {
      this.showAlert().catch(error => console.log('There was an error showing the alert'));
    } else {
      this.managerService.addNote(this.noteTitle, this.noteBody);
      this.noteTitle = '';
      this.noteBody = '';
    }
  }

  async showAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Empty field',
      message: 'Make sure that all fields are filled.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
