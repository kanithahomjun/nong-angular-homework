import { NodeWithI18n } from '@angular/compiler';
import { Component,Input } from '@angular/core';
@Component({
selector: 'app-counting',
templateUrl: './counting.component.html',
styleUrls: ['./counting.component.css']
})
export class CountingComponent {
    
    @Input()
    title: string;

    count = 0;

    constructor() {}

    countNumber() {
        this.count = this.count + 1;
    }
}
