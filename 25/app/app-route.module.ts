import { NgModule } from '@angular/core' ;
import { CommonModule } from '@angular/common' ;
import { RouterModule, Routes } from '@angular/router' ;
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './catalog/product-item/product-item.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';
import { BackendService } from './backend.service';
import { PanelComponent } from './catalog/panel/panel.component';
import { FormsModule } from '@angular/forms';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    },
    {
    path: 'products',
    component: ProductListComponent
    },
    {
    path: 'products/:id',
    component: ProductDetailComponent
    },
    {
    path: '**',
    component: PageNotFoundComponent
    }
   ];
@NgModule({
declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRouteModule {}