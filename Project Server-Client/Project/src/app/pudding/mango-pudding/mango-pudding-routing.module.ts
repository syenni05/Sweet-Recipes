import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangoPuddingPage } from './mango-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: MangoPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangoPuddingPageRoutingModule {}
