import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router' ;
const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  }
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
