import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-mango-pudding',
  templateUrl: './mango-pudding.page.html',
  styleUrls: ['./mango-pudding.page.scss'],
})
export class MangoPuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '2 hours 20 min'
    },
    {
      img: './assets/person.png',
      content: '3 servings'
    },
    {
      img: './assets/calorie.png',
      content: '406 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
