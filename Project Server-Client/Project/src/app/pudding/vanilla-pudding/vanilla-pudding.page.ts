import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-vanilla-pudding',
  templateUrl: './vanilla-pudding.page.html',
  styleUrls: ['./vanilla-pudding.page.scss'],
})
export class VanillaPuddingPage{
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
      content: '163 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
