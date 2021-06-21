import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;
  @Output()
 // OnSelected: EventEmitter<Product> = new EventEmitter();
 OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();
 isSelected: boolean;

  constructor() { }

  ngOnInit(){
  }

  select() {
    //this.OnSelected.emit(this.product);
    this.OnSelected.emit(this);
    }

}