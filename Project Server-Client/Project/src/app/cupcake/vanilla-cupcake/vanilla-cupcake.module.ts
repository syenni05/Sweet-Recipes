import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanillaCupcakePageRoutingModule } from './vanilla-cupcake-routing.module';

import { VanillaCupcakePage } from './vanilla-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanillaCupcakePageRoutingModule
  ],
  declarations: [VanillaCupcakePage]
})
export class VanillaCupcakePageModule {}
