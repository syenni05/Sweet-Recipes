import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawberryCakeRollPageRoutingModule } from './strawberry-cake-roll-routing.module';

import { StrawberryCakeRollPage } from './strawberry-cake-roll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrawberryCakeRollPageRoutingModule
  ],
  declarations: [StrawberryCakeRollPage]
})
export class StrawberryCakeRollPageModule {}
