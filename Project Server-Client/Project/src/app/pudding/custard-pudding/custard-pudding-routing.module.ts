import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustardPuddingPage } from './custard-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: CustardPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustardPuddingPageRoutingModule {}
