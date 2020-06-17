import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolatePuddingPageRoutingModule } from './chocolate-pudding-routing.module';

import { ChocolatePuddingPage } from './chocolate-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolatePuddingPageRoutingModule
  ],
  declarations: [ChocolatePuddingPage]
})
export class ChocolatePuddingPageModule {}
