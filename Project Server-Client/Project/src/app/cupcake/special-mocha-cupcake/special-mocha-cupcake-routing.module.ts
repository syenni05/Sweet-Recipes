import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialMochaCupcakePage } from './special-mocha-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialMochaCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialMochaCupcakePageRoutingModule {}
