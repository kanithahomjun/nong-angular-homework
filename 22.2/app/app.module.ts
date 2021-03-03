import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {CountingComponent} from './counting/counting.component';
import {Lab4Component} from './lab4/lab4.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TopBannerComponent} from './topbanner/topbanner.component';
import {CategoryMenuComponent} from './categorymenu/categorymenu.component';
import {SearchBarComponent} from './searchbar/searchbar.component';
import {ToDoListComponent} from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { MytaskComponent } from './mytask/mytask.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, CountingComponent,
    Lab4Component,NavbarComponent,TopBannerComponent,
    CategoryMenuComponent,SearchBarComponent,ToDoListComponent, MytaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
