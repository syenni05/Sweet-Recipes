import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-lemon-cupcake',
  templateUrl: './lemon-cupcake.page.html',
  styleUrls: ['./lemon-cupcake.page.scss'],
})
export class LemonCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '45 min'
    },
    {
      img: './assets/person.png',
      content: '15 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '285 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
