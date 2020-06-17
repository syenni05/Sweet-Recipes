import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GermanChocolateCakePageRoutingModule } from './german-chocolate-cake-routing.module';

import { GermanChocolateCakePage } from './german-chocolate-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GermanChocolateCakePageRoutingModule
  ],
  declarations: [GermanChocolateCakePage]
})
export class GermanChocolateCakePageModule {}
