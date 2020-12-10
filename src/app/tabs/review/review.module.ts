/**
 * Declaration of review page module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule} from 'ng2-search-filter'

import { ReviewPage } from './review.page';
import { ReviewPageRoutingModule } from './review-routing.module';

/**
 * Implements the review's tab page module.
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReviewPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ReviewPage]
})
export class ReviewPageModule {}
