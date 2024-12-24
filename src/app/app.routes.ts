import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { DialogExampleComponent } from './pages/dialog-example/dialog-example.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';

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
        path:'dialog',
        component:DialogExampleComponent
    },
    {
        path:'projection',
        component:ContentProjectionComponent
    },

];
