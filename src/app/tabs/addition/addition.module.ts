import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdditionPage } from './addition.page';

import { AdditionPageRoutingModule } from './addition-routing.module';

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
