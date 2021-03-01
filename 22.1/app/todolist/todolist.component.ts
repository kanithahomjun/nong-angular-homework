import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
  })
  export class ToDoListComponent implements OnInit {
  title:"todolist"
  products: Task[];
    constructor() {
      this.products = [];
      this.products.push({
        id: 1,
        name: "ส้มโอ",
        description:"หวาน"
      });
      this.products.push({
        id: 2,
        name: "แตงโม",
        description:"หวาน"
      });
      this.products.push({
        id: 3,
        name: "ส้ม",
        description:"หวาน"
      });
     

    }
  ngOnInit() {}
  selectedProduct(product: Task) {
    alert(`Product ${product.name} deleted`);
  }
  AddItems(){}

  }
