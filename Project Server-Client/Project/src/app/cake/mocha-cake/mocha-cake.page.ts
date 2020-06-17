import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-mocha-cake',
  templateUrl: './mocha-cake.page.html',
  styleUrls: ['./mocha-cake.page.scss'],
})
export class MochaCakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '1 hour'
    },
    {
      img: './assets/person.png',
      content: '10 servings'
    },
    {
      img: './assets/calorie.png',
      content: '320 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
