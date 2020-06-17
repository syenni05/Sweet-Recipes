import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiteCakePage } from './white-cake.page';

const routes: Routes = [
  {
    path: '',
    component: WhiteCakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiteCakePageRoutingModule {}
