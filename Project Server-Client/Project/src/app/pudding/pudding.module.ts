import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuddingPageRoutingModule } from './pudding-routing.module';

import { PuddingPage } from './pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuddingPageRoutingModule
  ],
  declarations: [PuddingPage]
})
export class PuddingPageModule {}
