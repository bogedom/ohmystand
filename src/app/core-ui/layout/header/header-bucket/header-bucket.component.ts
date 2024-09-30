import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'oms-header-bucket',
  standalone: true,
  imports: [],
  templateUrl: './header-bucket.component.html',
  styleUrl: './header-bucket.component.scss'
})
export class HeaderBucketComponent {
  isShow = false;

  constructor(private readonly router: Router) {
  }

  toggle(isShow: boolean): void {
    this.isShow = isShow;
  }

  onOpenCart(): void {
    this.router.navigate(['/cart']).then(() => this.toggle(false));
  }
}
