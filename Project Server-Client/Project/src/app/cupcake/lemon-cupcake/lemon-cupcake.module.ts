import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemonCupcakePageRoutingModule } from './lemon-cupcake-routing.module';

import { LemonCupcakePage } from './lemon-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemonCupcakePageRoutingModule
  ],
  declarations: [LemonCupcakePage]
})
export class LemonCupcakePageModule {}
