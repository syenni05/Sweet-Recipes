import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolateButtercreamCupcakePage } from './chocolate-buttercream-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolateButtercreamCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolateButtercreamCupcakePageRoutingModule {}
