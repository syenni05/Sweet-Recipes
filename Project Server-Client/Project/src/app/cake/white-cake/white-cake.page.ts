import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-white-cake',
  templateUrl: './white-cake.page.html',
  styleUrls: ['./white-cake.page.scss'],
})
export class WhiteCakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '1 hour 15 min'
    },
    {
      img: './assets/person.png',
      content: '12 servings'
    },
    {
      img: './assets/calorie.png',
      content: '550 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
