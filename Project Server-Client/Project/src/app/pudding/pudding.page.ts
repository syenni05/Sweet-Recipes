import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
import { products } from '../product';

@Component({
  selector: 'app-pudding',
  templateUrl: './pudding.page.html',
  styleUrls: ['./pudding.page.scss'],
})
export class PuddingPage {
  listProducts = [];
  products: any[];
  constructor(private utils: UtilsService) {
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }
}
