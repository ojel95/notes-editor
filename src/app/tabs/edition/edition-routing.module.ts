/**
 * Declaration of edition page routing module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionPage } from './edition.page';

const routes: Routes = [
  {
    path: '',
    component: EditionPage,
  }
];

/**
 * Implements the edition tab page routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionPageRoutingModule {}
