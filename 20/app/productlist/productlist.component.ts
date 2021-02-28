import { Component, OnInit , ViewChild, ViewChildren, QueryList} from '@angular/core';
import { Product } from '../models/product';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
  })
  export class ProductListComponent implements OnInit {
    @ViewChildren(ProductitemComponent)
    productItems: QueryList<ProductitemComponent>;
  
  
    products: Product[];
    constructor() {
      this.products = [];    
    }
  ngOnInit() {}

  selectedProduct(productComponent: ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

  }
