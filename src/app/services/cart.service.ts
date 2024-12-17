import { Injectable, signal } from '@angular/core';
import { ProductsListComponent } from '../pages/products-list/products-list.component';
import { Product } from '../../models/products.module';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([])

  constructor() { }


  addToCart(product:Product){
    this.cart.set([...this.cart(),product])
  }
}
