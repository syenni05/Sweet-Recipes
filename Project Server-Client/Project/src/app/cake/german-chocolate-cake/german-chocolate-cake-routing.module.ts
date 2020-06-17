import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GermanChocolateCakePage } from './german-chocolate-cake.page';

const routes: Routes = [
  {
    path: '',
    component: GermanChocolateCakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermanChocolateCakePageRoutingModule {}
