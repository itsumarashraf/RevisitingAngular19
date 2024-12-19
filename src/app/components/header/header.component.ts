import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ProductsListComponent } from '../../pages/products-list/products-list.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { cartReducer } from '../../store/cart.reducer';
import { Product } from '../../../models/products.module';
import { Store } from '@ngrx/store';
import { selectCart } from '../../store/cart.selector';
import { addItemToCart } from '../../store/cart.actions';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store);

  cart$:any

  cartService = inject(CartService);


  title= signal('Shopify.')

  ngOnInit(){
    this.cart$.set(this.store.select(selectCart))
  }

  addToCart() {
    this.store.dispatch(
      addItemToCart({
        item: { id: '1', name: 'Product 1', price: 100, quantity: 1 },
      })
    );
  }

  showButtonClicked(){
    this.addToCart()
  }
}
