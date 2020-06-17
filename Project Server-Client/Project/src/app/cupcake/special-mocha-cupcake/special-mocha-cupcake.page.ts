import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-special-mocha-cupcake',
  templateUrl: './special-mocha-cupcake.page.html',
  styleUrls: ['./special-mocha-cupcake.page.scss'],
})
export class SpecialMochaCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '55 min'
    },
    {
      img: './assets/person.png',
      content: '12 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '412 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
