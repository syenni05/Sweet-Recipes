import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MochaCakePageRoutingModule } from './mocha-cake-routing.module';

import { MochaCakePage } from './mocha-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MochaCakePageRoutingModule
  ],
  declarations: [MochaCakePage]
})
export class MochaCakePageModule {}
