/**
 * Declaration of review page routing module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewPage } from './review.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPage,
  }
];

/**
 * Implements the review tab page routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewPageRoutingModule {}
