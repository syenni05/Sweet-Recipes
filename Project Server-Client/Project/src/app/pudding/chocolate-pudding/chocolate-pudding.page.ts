import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-chocolate-pudding',
  templateUrl: './chocolate-pudding.page.html',
  styleUrls: ['./chocolate-pudding.page.scss'],
})
export class ChocolatePuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '30 min'
    },
    {
      img: './assets/person.png',
      content: '8 servings'
    },
    {
      img: './assets/calorie.png',
      content: '196 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
