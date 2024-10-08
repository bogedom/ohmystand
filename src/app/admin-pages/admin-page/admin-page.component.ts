import { Component } from '@angular/core';
import { StandTableComponent } from '../../admin-features/stand-table/stand-table.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../core-ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'oms-admin-page',
  standalone: true,
  imports: [
    StandTableComponent,
    RouterOutlet,
    BreadcrumbComponent,
    RouterLink
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
