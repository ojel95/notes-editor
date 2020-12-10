/**
 * Declaration of tabs page routing module.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'addition',
        loadChildren: () => import('./addition/addition.module').then(m => m.AdditionPageModule)
      },
      {
        path: 'review',
        loadChildren: () => import('./review/review.module').then(m => m.ReviewPageModule)
      },
      {
        path: 'edition/:id',
        loadChildren: () => import('./edition/edition.module').then(m => m.EditionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/review',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/review',
    pathMatch: 'full'
  }
];

/**
 * Implements the general tabs page routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
