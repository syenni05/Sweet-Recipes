import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolateCakePageRoutingModule } from './chocolate-cake-routing.module';

import { ChocolateCakePage } from './chocolate-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolateCakePageRoutingModule
  ],
  declarations: [ChocolateCakePage]
})
export class ChocolateCakePageModule {}
