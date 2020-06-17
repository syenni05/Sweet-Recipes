import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-chocolate-buttercream-cupcake',
  templateUrl: './chocolate-buttercream-cupcake.page.html',
  styleUrls: ['./chocolate-buttercream-cupcake.page.scss'],
})
export class ChocolateButtercreamCupcakePage{
  slidecupcake = {
    slidesPerView: 2.3
  }
  content = [
    {
      img: './assets/time.png',
      content: '1 hour 10 min'
    },
    {
      img: './assets/person.png',
      content: '6 cupcakes'
    },
    {
      img: './assets/calorie.png',
      content: '340 calories'
    }
  ]
  constructor(private utils: UtilsService) { }

  save(data) {
    console.log('You just saved this recipe');
    this.utils.showToast('You just saved this recipe');
    }

}
