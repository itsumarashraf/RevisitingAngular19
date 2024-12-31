import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../../components/simple-dialog/simple-dialog.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCart } from '../../store/cart.selector';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent,AsyncPipe,JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 cartService = inject(CartService)
 router = inject(Router)

 simpleDialog = inject(MatDialog)

 store = inject(Store)


 cart$ = toSignal(this.store.select(selectCart));


 handleCheckout(){
  this.simpleDialog.open(SimpleDialogComponent)
  return
  alert('Order was placed successfully!')
  this.cartService.cart.set([])
  this.router.navigate(['/'])
 }

  //computed signal
  total = computed(()=>{
    return this.cartService.cart().reduce((p,c)=> p + c.price,0)
  })
  
}
