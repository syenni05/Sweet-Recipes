import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawberryPuddingPageRoutingModule } from './strawberry-pudding-routing.module';

import { StrawberryPuddingPage } from './strawberry-pudding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrawberryPuddingPageRoutingModule
  ],
  declarations: [StrawberryPuddingPage]
})
export class StrawberryPuddingPageModule {}
