import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-matcha-cupcake',
  templateUrl: './matcha-cupcake.page.html',
  styleUrls: ['./matcha-cupcake.page.scss'],
})
export class MatchaCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '40 min'
    },
    {
      img: './assets/person.png',
      content: '18 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '279 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
