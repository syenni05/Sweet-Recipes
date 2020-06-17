import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JammyPuddingPageRoutingModule } from './jammy-pudding-routing.module';

import { JammyPuddingPage } from './jammy-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JammyPuddingPageRoutingModule
  ],
  declarations: [JammyPuddingPage]
})
export class JammyPuddingPageModule {}
