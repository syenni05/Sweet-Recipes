import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-german-chocolate-cake',
  templateUrl: './german-chocolate-cake.page.html',
  styleUrls: ['./german-chocolate-cake.page.scss'],
})
export class GermanChocolateCakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '3 hours 20 min'
    },
    {
      img: './assets/person.png',
      content: '10 servings'
    },
    {
      img: './assets/calorie.png',
      content: '520 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
