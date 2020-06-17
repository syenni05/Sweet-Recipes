import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OreoCheesecakePage } from './oreo-cheesecake.page';

const routes: Routes = [
  {
    path: '',
    component: OreoCheesecakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OreoCheesecakePageRoutingModule {}
