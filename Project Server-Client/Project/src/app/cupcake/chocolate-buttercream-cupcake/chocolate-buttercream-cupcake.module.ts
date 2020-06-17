import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolateButtercreamCupcakePageRoutingModule } from './chocolate-buttercream-cupcake-routing.module';

import { ChocolateButtercreamCupcakePage } from './chocolate-buttercream-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolateButtercreamCupcakePageRoutingModule
  ],
  declarations: [ChocolateButtercreamCupcakePage]
})
export class ChocolateButtercreamCupcakePageModule {}
