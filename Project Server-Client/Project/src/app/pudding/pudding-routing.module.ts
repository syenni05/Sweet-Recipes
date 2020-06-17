import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuddingPage } from './pudding.page';

const routes: Routes = [
  {
    path: '',
    component: PuddingPage
  },
  {
    path: 'easy-banana-pudding',
    loadChildren: () => import('./easy-banana-pudding/easy-banana-pudding.module').then( m => m.EasyBananaPuddingPageModule)
  },
  {
    path: 'vanilla-pudding',
    loadChildren: () => import('./vanilla-pudding/vanilla-pudding.module').then( m => m.VanillaPuddingPageModule)
  },
  {
    path: 'mango-pudding',
    loadChildren: () => import('./mango-pudding/mango-pudding.module').then( m => m.MangoPuddingPageModule)
  },
  {
    path: 'jammy-pudding',
    loadChildren: () => import('./jammy-pudding/jammy-pudding.module').then( m => m.JammyPuddingPageModule)
  },
  {
    path: 'custard-pudding',
    loadChildren: () => import('./custard-pudding/custard-pudding.module').then( m => m.CustardPuddingPageModule)
  },
  {
    path: 'chocolate-pudding',
    loadChildren: () => import('./chocolate-pudding/chocolate-pudding.module').then( m => m.ChocolatePuddingPageModule)
  },
  {
    path: 'strawberry-pudding',
    loadChildren: () => import('./strawberry-pudding/strawberry-pudding.module').then( m => m.StrawberryPuddingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuddingPageRoutingModule {}
