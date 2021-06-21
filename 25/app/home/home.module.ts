import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRouteModule } from '../app-route.module' ;


@NgModule({
  declarations: [
    NavbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,AppRouteModule
  ],
  exports: [NavbarComponent,MainContentComponent]
})
export class HomeModule { }
