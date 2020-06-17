import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JammyPuddingPage } from './jammy-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: JammyPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JammyPuddingPageRoutingModule {}
