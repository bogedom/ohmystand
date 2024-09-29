import { Component } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { Breadcrumb } from './breadcrumb';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'oms-breadcrumb',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent  {
  breadcrumbs$: Observable<Breadcrumb[]>

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
