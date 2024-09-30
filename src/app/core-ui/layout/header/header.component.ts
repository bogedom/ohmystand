import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderBucketComponent } from './header-bucket/header-bucket.component';

@Component({
  selector: 'oms-header',
  standalone: true,
  imports: [RouterModule, HeaderBucketComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
