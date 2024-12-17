import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 cartService = inject(CartService)
 router = inject(Router)

 //computed signal
total = computed(()=>{
  return this.cartService.cart().reduce((p,c)=> p + c.price,0)
 })
 

 handleCheckout(){
  alert('Order was placed successfully!')
  this.cartService.cart.set([])
  this.router.navigate(['/'])
 }
}
