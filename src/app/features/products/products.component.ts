import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'oms-products',
  standalone: true,
  imports: [
    ProductItemComponent,
    ProductListComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
