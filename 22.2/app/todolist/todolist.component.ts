import { stringify } from '@angular/compiler/src/util';
import {Component,OnInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { Task } from '../models/task';
import { MytaskComponent } from '../mytask/mytask.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
  })
  export class ToDoListComponent implements OnInit {
    @ViewChildren(MytaskComponent)
    productItems: QueryList<MytaskComponent>;
   
  title:"todolist";
  msgName:string;
  msgDescription:string;
  products: Task[];

    constructor() {
      this.products = [];
      this.products.push({
        id: 1,
        name: "ส้มโอ",
        description:"หวานจริง"
      });
      this.products.push({
        id: 2,
        name: "แตงโม",
        description:"หวานฉ่ำ"
      });
      this.products.push({
        id: 3,
        name: "ส้ม",
        description:"เปรี้ยวมาก"
      });
     

    }
  ngOnInit() {}
  selectedProduct(product: Task) {
    
    alert(`Product ${product.name} selected`);

    this.msgDescription = product.description;
    this.msgName = product.name;
    
   // return this.msgDescription;
    

  }
  AddItems(){}

  }
