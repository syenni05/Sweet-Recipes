import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-vanilla-cupcake',
  templateUrl: './vanilla-cupcake.page.html',
  styleUrls: ['./vanilla-cupcake.page.scss'],
})
export class VanillaCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '37 min'
    },
    {
      img: './assets/person.png',
      content: '12 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '402 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }
}
