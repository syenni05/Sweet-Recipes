import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-easy-banana-pudding',
  templateUrl: './easy-banana-pudding.page.html',
  styleUrls: ['./easy-banana-pudding.page.scss'],
})
export class EasyBananaPuddingPage{
  slidepudding = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '45 min'
    },
    {
      img: './assets/person.png',
      content: '6 person'
    },
    {
      img: './assets/calorie.png',
      content: '350 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
