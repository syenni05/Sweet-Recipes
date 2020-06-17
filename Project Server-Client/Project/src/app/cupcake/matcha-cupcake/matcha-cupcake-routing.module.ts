import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchaCupcakePage } from './matcha-cupcake.page';

const routes: Routes = [
  {
    path: '',
    component: MatchaCupcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchaCupcakePageRoutingModule {}
