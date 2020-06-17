import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrawberryPuddingPage } from './strawberry-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: StrawberryPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrawberryPuddingPageRoutingModule {}
