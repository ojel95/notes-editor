import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionPage } from './addition.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionPageRoutingModule {}
