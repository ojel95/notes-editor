import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdditionPage } from './addition.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AdditionPageRoutingModule } from './addition-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AdditionPageRoutingModule
  ],
  declarations: [AdditionPage]
})
export class AdditionPageModule {}
