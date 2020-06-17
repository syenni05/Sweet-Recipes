import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustardPuddingPageRoutingModule } from './custard-pudding-routing.module';

import { CustardPuddingPage } from './custard-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustardPuddingPageRoutingModule
  ],
  declarations: [CustardPuddingPage]
})
export class CustardPuddingPageModule {}
