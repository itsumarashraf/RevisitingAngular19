import { ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { Product } from '../../../../models/products.module';
import { PrimaryButtonComponent } from "../../primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent,NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  cartService = inject(CartService)
  cd = inject(ChangeDetectorRef)
  product = input.required<Product>()

  ngOnInit(){
    
  }
  handleButtonClicked(product:Product){
    this.cartService.addToCart(product)
  }
}
