import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ProductItemComponent } from './product-item/product-item.component';
//import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service';
//import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouteModule } from './app-route.module' ;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent ,
    PageNotFoundComponent
    /*,
    ProductItemComponent,
    ProductListComponent,
    PanelComponent*/
  ],
  imports: [
    BrowserModule,FormsModule, CatalogModule, HomeModule,AppRouteModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
