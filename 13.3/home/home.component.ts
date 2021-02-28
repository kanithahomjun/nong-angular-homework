import { NodeWithI18n } from '@angular/compiler';
import { Component,Input } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    @Input()
    title: string;

    count = 0;

    items = [1, 2, 3, 4, 5];

    text ="Hello";

    currentDate = "2020-02-21";

    constructor() {}

    countNumber() {
        this.count = this.count + 1;
    }
}
