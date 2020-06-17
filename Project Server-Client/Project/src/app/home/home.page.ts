import { Component } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {  }
  
  slidebaru = {
    slidesPerView: 3
  }

  slidelagi = {
    slidesPerView : 1.3
  }

  mhs = [
    { name: 'Cake' },
    { name: 'Cupcake' },
    { name: 'Pudding' }

  ]

}
