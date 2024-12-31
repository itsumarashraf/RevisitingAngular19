import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { RenderingComponentsComponent } from './pages/rendering-components/rendering-components.component';
import { DefferedLoadingComponent } from './pages/deffered-loading/deffered-loading.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { AsyncFormValidationComponent } from './pages/async-form-validation/async-form-validation.component';


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
        path:'deffered-loading',
        pathMatch:'full',
        component:DefferedLoadingComponent
    },
        path:'directives',
        pathMatch:'full',
        component:DirectivesComponent
    },
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
    {
        path:'async-form-validation',
        pathMatch:'full',
        title:'Angular Forms validation',
        component:AsyncFormValidationComponent
    },

];
