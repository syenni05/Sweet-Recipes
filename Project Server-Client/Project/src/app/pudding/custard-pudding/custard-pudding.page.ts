import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-custard-pudding',
  templateUrl: './custard-pudding.page.html',
  styleUrls: ['./custard-pudding.page.scss'],
})
export class CustardPuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '11 min'
    },
    {
      img: './assets/person.png',
      content: '1 serving'
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
