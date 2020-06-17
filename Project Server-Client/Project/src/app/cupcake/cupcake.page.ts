import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
import { products } from '../product';

@Component({
  selector: 'app-cupcake',
  templateUrl: './cupcake.page.html',
  styleUrls: ['./cupcake.page.scss'],
})
export class CupcakePage {
  listProducts = [];
  products: any[];
  constructor(private utils: UtilsService) { 
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }
}
