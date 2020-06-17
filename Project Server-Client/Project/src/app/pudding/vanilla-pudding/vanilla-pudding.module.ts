import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanillaPuddingPageRoutingModule } from './vanilla-pudding-routing.module';

import { VanillaPuddingPage } from './vanilla-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanillaPuddingPageRoutingModule
  ],
  declarations: [VanillaPuddingPage]
})
export class VanillaPuddingPageModule {}
