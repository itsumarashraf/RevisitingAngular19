import { Component, signal } from '@angular/core';
import { Product } from '../../../models/products.module';
import { ProductCardComponent } from "../../components/products-list/product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = signal<Product[]>(
    [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        stock: 15
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: 22.3,
        stock: 25
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        price: 55.99,
        stock: 8
      },
      {
        id: 4,
        title: "Women's 3-in-1 Snowboard Jacket",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        price: 56.99,
        stock: 12
      },
      {
        id: 5,
        title: "Women's Solid Gold Petite Micropave",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        price: 168.00,
        stock: 5
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave Diamond",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        price: 168.00,
        stock: 7
      },
      {
        id: 7,
        title: "White Gold Plated Princess Diamond Ring",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        price: 9.99,
        stock: 20
      },
      {
        id: 8,
        title: "Portable External Hard Drive",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        price: 64.00,
        stock: 18
      }
    ]
  )
}
