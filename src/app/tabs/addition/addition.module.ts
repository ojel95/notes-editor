/**
 * Declaration of addition page module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdditionPage } from './addition.page';

import { AdditionPageRoutingModule } from './addition-routing.module';

/**
 * Implements the addition's tab page module.
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdditionPageRoutingModule
  ],
  declarations: [AdditionPage]
})
export class AdditionPageModule {}
