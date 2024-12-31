import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ɵinjectChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../components/products-list/product-card/product-card.component';
import { Product } from '../../../models/products.module';

@Component({
  selector: 'app-change-detection',
  imports: [FormsModule,ProductCardComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  cd = inject(ChangeDetectorRef)
  test = 'hello World'
  
  product = {
    id: 1,
    title: 'product 1',
    image:'',
    price: 100,
  }

  updateViaClick(){
    setTimeout(() => {
      
      this.test = 'new value';
      this.cd.markForCheck();
    }, 2000);
  }
  updateTest(newValue:string|number):void {
    this.test = 'umarashraf';
  //   if(typeof newValue === 'string') { //narrowing the type of newValue
  //   this.test = newValue;
  // }else{
  //   this.test = newValue.toString();
  // }
}

}
