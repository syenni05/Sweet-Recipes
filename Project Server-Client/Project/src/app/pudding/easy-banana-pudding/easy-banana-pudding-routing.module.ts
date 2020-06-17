import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyBananaPuddingPage } from './easy-banana-pudding.page';

const routes: Routes = [
  {
    path: '',
    component: EasyBananaPuddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyBananaPuddingPageRoutingModule {}
