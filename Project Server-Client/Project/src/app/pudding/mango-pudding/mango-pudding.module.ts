import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangoPuddingPageRoutingModule } from './mango-pudding-routing.module';

import { MangoPuddingPage } from './mango-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangoPuddingPageRoutingModule
  ],
  declarations: [MangoPuddingPage]
})
export class MangoPuddingPageModule {}
