import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
import { products } from '../product';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.page.html',
  styleUrls: ['./cake.page.scss'],
})
export class CakePage {
  listProducts = [];
  products: any[];
  constructor(private utils: UtilsService) {
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }
}