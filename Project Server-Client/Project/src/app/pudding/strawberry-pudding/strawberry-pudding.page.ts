import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-strawberry-pudding',
  templateUrl: './strawberry-pudding.page.html',
  styleUrls: ['./strawberry-pudding.page.scss'],
})
export class StrawberryPuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '4 hours 20 min'
    },
    {
      img: './assets/person.png',
      content: '4 serving'
    },
    {
      img: './assets/calorie.png',
      content: '171 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
