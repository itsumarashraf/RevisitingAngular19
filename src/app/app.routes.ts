import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';

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
        path:'add-product',
        pathMatch:'full',
        title:'Angular Forms',
        component:AddProductComponent
    },
    {
        path:'form-validation',
        pathMatch:'full',
        title:'Angular Forms validation',
        component:FormValidationComponent
    },
];
