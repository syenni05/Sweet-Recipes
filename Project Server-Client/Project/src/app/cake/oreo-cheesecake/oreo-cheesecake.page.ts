import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-oreo-cheesecake',
  templateUrl: './oreo-cheesecake.page.html',
  styleUrls: ['./oreo-cheesecake.page.scss'],
})
export class OreoCheesecakePage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '7 hours 50 min'
    },
    {
      img: './assets/person.png',
      content: '8 servings'
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
