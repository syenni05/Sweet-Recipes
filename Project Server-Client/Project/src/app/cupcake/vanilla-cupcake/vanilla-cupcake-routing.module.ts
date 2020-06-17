import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanillaCupcakePage } from './vanilla-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: VanillaCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanillaCupcakePageRoutingModule {}
