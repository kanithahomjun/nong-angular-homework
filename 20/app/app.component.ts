import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:[]
})
export class AppComponent implements OnInit {
  title = 'angular17-lab2';
  @ViewChild('productList')
  productList: ProductListComponent;
  ngOnInit(): void {
    this.productList.products = [
    {
    name: 'ส้มโอ',
    price: 111
    },
    {
    name: 'แตงโม',
    price: 222
    },
    {
    name: 'มะพร้าวนํ้าหอม',
    price: 333
    }
    ];
    }
    constructor() {}
}
