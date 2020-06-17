import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RainbowCupcakePage } from './rainbow-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: RainbowCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RainbowCupcakePageRoutingModule {}
