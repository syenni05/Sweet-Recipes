import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OreoCheesecakePageRoutingModule } from './oreo-cheesecake-routing.module';

import { OreoCheesecakePage } from './oreo-cheesecake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OreoCheesecakePageRoutingModule
  ],
  declarations: [OreoCheesecakePage]
})
export class OreoCheesecakePageModule {}
