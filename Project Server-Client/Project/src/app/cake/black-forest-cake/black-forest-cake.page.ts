import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-black-forest-cake',
  templateUrl: './black-forest-cake.page.html',
  styleUrls: ['./black-forest-cake.page.scss'],
})
export class BlackForestCakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '2 hours 45 min'
    },
    {
      img: './assets/person.png',
      content: '12 servings'
    },
    {
      img: './assets/calorie.png',
      content: '530 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
