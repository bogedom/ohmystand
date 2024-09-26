import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'oms-cart',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
