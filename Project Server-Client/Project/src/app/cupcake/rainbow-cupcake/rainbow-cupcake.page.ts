import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-rainbow-cupcake',
  templateUrl: './rainbow-cupcake.page.html',
  styleUrls: ['./rainbow-cupcake.page.scss'],
})
export class RainbowCupcakePage{
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
      content: '24 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '106 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
