import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditionPage } from './edition.page';

import { EditionPageRoutingModule } from './edition-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EditionPage }]),
    EditionPageRoutingModule,
  ],
  declarations: [EditionPage]
})
export class EditionPageModule {}
