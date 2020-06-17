import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupcakePageRoutingModule } from './cupcake-routing.module';

import { CupcakePage } from './cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupcakePageRoutingModule
  ],
  declarations: [CupcakePage]
})
export class CupcakePageModule {}
