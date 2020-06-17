import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-strawberry-cake-roll',
  templateUrl: './strawberry-cake-roll.page.html',
  styleUrls: ['./strawberry-cake-roll.page.scss'],
})
export class StrawberryCakeRollPage{
  slidecake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '3 hours'
    },
    {
      img: './assets/person.png',
      content: '8 servings'
    },
    {
      img: './assets/calorie.png',
      content: '325 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
