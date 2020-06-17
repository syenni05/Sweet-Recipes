import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialMochaCupcakePageRoutingModule } from './special-mocha-cupcake-routing.module';

import { SpecialMochaCupcakePage } from './special-mocha-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialMochaCupcakePageRoutingModule
  ],
  declarations: [SpecialMochaCupcakePage]
})
export class SpecialMochaCupcakePageModule {}
