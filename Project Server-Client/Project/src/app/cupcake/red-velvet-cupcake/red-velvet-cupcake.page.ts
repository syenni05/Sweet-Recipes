import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-red-velvet-cupcake',
  templateUrl: './red-velvet-cupcake.page.html',
  styleUrls: ['./red-velvet-cupcake.page.scss'],
})
export class RedVelvetCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '35 min'
    },
    {
      img: './assets/person.png',
      content: '16 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '356 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
