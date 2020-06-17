import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-chocolate-cake',
  templateUrl: './chocolate-cake.page.html',
  styleUrls: ['./chocolate-cake.page.scss'],
})
export class ChocolateCakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '50 min'
    },
    {
      img: './assets/person.png',
      content: '10 servings'
    },
    {
      img: './assets/calorie.png',
      content: '250 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
