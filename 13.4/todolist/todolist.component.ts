import { NodeWithI18n } from '@angular/compiler';
import { Component,Input } from '@angular/core';
@Component({
selector: 'app-todolist',
templateUrl: './todolist.component.html',
styleUrls: ['./todolist.component.css']
})
export class ToDoListComponent {
    
    @Input()
    title: string;
    items = ["Coffee", "Breakfast"];

    constructor() {}
    AddItems(){}
    DelItems(){}
       


}