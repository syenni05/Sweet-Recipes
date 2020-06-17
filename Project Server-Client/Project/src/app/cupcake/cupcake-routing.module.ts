import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupcakePage } from './cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: CupcakePage
  },
  {
    path: 'vanilla-cupcake',
    loadChildren: () => import('./vanilla-cupcake/vanilla-cupcake.module').then( m => m.VanillaCupcakePageModule)
  },
  {
    path: 'lemon-cupcake',
    loadChildren: () => import('./lemon-cupcake/lemon-cupcake.module').then( m => m.LemonCupcakePageModule)
  },
  {
    path: 'matcha-cupcake',
    loadChildren: () => import('./matcha-cupcake/matcha-cupcake.module').then( m => m.MatchaCupcakePageModule)
  },
  {
    path: 'rainbow-cupcake',
    loadChildren: () => import('./rainbow-cupcake/rainbow-cupcake.module').then( m => m.RainbowCupcakePageModule)
  },
  {
    path: 'red-velvet-cupcake',
    loadChildren: () => import('./red-velvet-cupcake/red-velvet-cupcake.module').then( m => m.RedVelvetCupcakePageModule)
  },
  {
    path: 'chocolate-buttercream-cupcake',
    loadChildren: () => import('./chocolate-buttercream-cupcake/chocolate-buttercream-cupcake.module').then( m => m.ChocolateButtercreamCupcakePageModule)
  },
  {
    path: 'special-mocha-cupcake',
    loadChildren: () => import('./special-mocha-cupcake/special-mocha-cupcake.module').then( m => m.SpecialMochaCupcakePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CupcakePageRoutingModule {}
