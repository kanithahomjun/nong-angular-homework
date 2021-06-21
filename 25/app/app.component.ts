import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackendService } from './backend.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  //constructor(private backendService: BackendService) {}

  //title = 'angular23';
  //@ViewChild('productList')
  //productList: ProductListComponent;
  ngOnInit(): void {
    //this.productList.products = this.backendService.getProducts();
   /* this.productList.products = [
    {
    name: 'ส้มโอ1',
    price: 111
    },
    {
    name: 'แตงโม1',
    price: 222
    },
    {
    name: 'มะพร้าวนํ้าหอม1',
    price: 333
    }
    ];*/
    }
   // constructor() {} 
}
