import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditionPage } from './edition.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { EditionPageRoutingModule } from './edition-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: EditionPage }]),
    EditionPageRoutingModule,
  ],
  declarations: [EditionPage]
})
export class EditionPageModule {}
