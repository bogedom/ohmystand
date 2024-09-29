import { Component } from '@angular/core';
import { StandTableComponent } from '../../features/stand-table/stand-table.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../core-ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'oms-admin-page',
  standalone: true,
  imports: [
    StandTableComponent,
    RouterOutlet,
    BreadcrumbComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
