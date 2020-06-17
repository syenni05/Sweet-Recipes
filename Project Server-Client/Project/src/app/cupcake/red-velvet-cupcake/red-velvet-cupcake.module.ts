import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedVelvetCupcakePageRoutingModule } from './red-velvet-cupcake-routing.module';

import { RedVelvetCupcakePage } from './red-velvet-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedVelvetCupcakePageRoutingModule
  ],
  declarations: [RedVelvetCupcakePage]
})
export class RedVelvetCupcakePageModule {}
