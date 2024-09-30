import { Component } from '@angular/core';

@Component({
  selector: 'oms-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  isLoading = false;

  onAddToCart(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600)
  }
}
