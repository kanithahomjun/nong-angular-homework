import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
  })
  export class ProductListComponent implements OnInit {
  products: Product[];
    constructor() {
      this.products = [];
      this.products.push({
        name: 'ส้มโอ',
        price: 990
      });
      this.products.push({
        name: 'แตงโม',
        price: 1000
      });
      this.products.push({
        name: 'มะพร้าวนํ้าหอม',
        price: 500
      });
     

    }
  ngOnInit() {}
  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
  }

  }
