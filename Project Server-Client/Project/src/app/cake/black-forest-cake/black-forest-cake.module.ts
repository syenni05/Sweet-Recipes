import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackForestCakePageRoutingModule } from './black-forest-cake-routing.module';

import { BlackForestCakePage } from './black-forest-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackForestCakePageRoutingModule
  ],
  declarations: [BlackForestCakePage]
})
export class BlackForestCakePageModule {}
