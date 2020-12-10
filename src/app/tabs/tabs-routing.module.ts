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
        path: 'edition',
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
