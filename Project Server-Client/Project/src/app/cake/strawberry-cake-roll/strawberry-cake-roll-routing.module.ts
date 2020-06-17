import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrawberryCakeRollPage } from './strawberry-cake-roll.page';

const routes: Routes = [
  {
    path: '',
    component: StrawberryCakeRollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrawberryCakeRollPageRoutingModule {}
