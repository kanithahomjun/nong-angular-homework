import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent implements OnInit {
 
  @Input()
  product: Task;
  @Output()
  OnSelected: EventEmitter<Task> = new EventEmitter();
  isSelected: boolean;
  
  constructor() {}
  ngOnInit() {}
  select() {   
   this.isSelected = !this.isSelected;

   this.OnSelected.emit(this.product);

  }

 
}
  
