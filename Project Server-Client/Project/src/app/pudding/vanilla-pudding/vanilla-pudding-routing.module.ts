import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanillaPuddingPage } from './vanilla-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: VanillaPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanillaPuddingPageRoutingModule {}
