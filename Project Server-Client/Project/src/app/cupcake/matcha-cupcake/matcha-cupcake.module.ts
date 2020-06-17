import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchaCupcakePageRoutingModule } from './matcha-cupcake-routing.module';

import { MatchaCupcakePage } from './matcha-cupcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchaCupcakePageRoutingModule
  ],
  declarations: [MatchaCupcakePage]
})
export class MatchaCupcakePageModule {}
