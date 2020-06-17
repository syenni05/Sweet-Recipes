import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolatePuddingPage } from './chocolate-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolatePuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolatePuddingPageRoutingModule {}
