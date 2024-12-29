import { Component } from '@angular/core';
import { ProductsListComponent } from "../products-list/products-list.component";

@Component({
  selector: 'app-deffered-loading',
  imports: [ProductsListComponent],
  templateUrl: './deffered-loading.component.html',
  styleUrl: './deffered-loading.component.scss'
})
export class DefferedLoadingComponent {
load=false
}
