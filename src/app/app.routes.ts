import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { RenderingComponentsComponent } from './pages/rendering-components/rendering-components.component';

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
        path:'rendering-components',
        component:RenderingComponentsComponent
    }
];
