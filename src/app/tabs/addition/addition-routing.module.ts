/**
 * Declaration of addition page routing module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionPage } from './addition.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionPage,
  }
];

/**
 * Implements the addition tab page routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionPageRoutingModule {}
