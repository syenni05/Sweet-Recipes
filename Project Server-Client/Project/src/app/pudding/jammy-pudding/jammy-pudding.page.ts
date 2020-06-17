import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-jammy-pudding',
  templateUrl: './jammy-pudding.page.html',
  styleUrls: ['./jammy-pudding.page.scss'],
})
export class JammyPuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '25 min'
    },
    {
      img: './assets/person.png',
      content: '6 servings'
    },
    {
      img: './assets/calorie.png',
      content: '200 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
