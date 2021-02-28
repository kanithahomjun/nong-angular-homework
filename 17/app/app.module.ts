import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    ProductitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
