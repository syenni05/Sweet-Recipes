import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CakePage } from './cake.page';

const routes: Routes = [
  {
    path: '',
    component: CakePage
  },
  {
    path: 'white-cake',
    loadChildren: () => import('./white-cake/white-cake.module').then( m => m.WhiteCakePageModule)
  },
  {
    path: 'black-forest-cake',
    loadChildren: () => import('./black-forest-cake/black-forest-cake.module').then( m => m.BlackForestCakePageModule)
  },
  {
    path: 'chocolate-cake',
    loadChildren: () => import('./chocolate-cake/chocolate-cake.module').then( m => m.ChocolateCakePageModule)
  },
  {
    path: 'german-chocolate-cake',
    loadChildren: () => import('./german-chocolate-cake/german-chocolate-cake.module').then( m => m.GermanChocolateCakePageModule)
  },
  {
    path: 'mocha-cake',
    loadChildren: () => import('./mocha-cake/mocha-cake.module').then( m => m.MochaCakePageModule)
  },
  {
    path: 'oreo-cheesecake',
    loadChildren: () => import('./oreo-cheesecake/oreo-cheesecake.module').then( m => m.OreoCheesecakePageModule)
  },
  {
    path: 'strawberry-cake-roll',
    loadChildren: () => import('./strawberry-cake-roll/strawberry-cake-roll.module').then( m => m.StrawberryCakeRollPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CakePageRoutingModule {}
