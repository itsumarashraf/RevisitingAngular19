import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { DefferedLoadingComponent } from './pages/deffered-loading/deffered-loading.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:ProductsListComponent
    },
    {
        path:'cart',
        pathMatch:'full',
        component:CartComponent
    },
    {
        path:'deffered-loading',
        pathMatch:'full',
        component:DefferedLoadingComponent
    },
];
