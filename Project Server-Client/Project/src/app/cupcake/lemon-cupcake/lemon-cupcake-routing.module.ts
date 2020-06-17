import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LemonCupcakePage } from './lemon-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: LemonCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LemonCupcakePageRoutingModule {}
