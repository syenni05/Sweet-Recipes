import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RainbowCupcakePageRoutingModule } from './rainbow-cupcake-routing.module';

import { RainbowCupcakePage } from './rainbow-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RainbowCupcakePageRoutingModule
  ],
  declarations: [RainbowCupcakePage]
})
export class RainbowCupcakePageModule {}
