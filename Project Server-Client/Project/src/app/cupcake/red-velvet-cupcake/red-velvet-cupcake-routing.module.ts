import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedVelvetCupcakePage } from './red-velvet-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: RedVelvetCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedVelvetCupcakePageRoutingModule {}
