import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MochaCakePage } from './mocha-cake.page';

const routes: Routes = [
  {
    path: '',
    component: MochaCakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MochaCakePageRoutingModule {}
