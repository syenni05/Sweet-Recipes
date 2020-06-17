import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyBananaPuddingPageRoutingModule } from './easy-banana-pudding-routing.module';

import { EasyBananaPuddingPage } from './easy-banana-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyBananaPuddingPageRoutingModule
  ],
  declarations: [EasyBananaPuddingPage]
})
export class EasyBananaPuddingPageModule {}
