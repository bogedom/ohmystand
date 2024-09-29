import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Stand } from '../../core/api/stands/stand';
import { CommonModule } from '@angular/common';
import { STAND_SERVICE_TOKEN } from '../../core/api/stands/stand-service-token';
import { FirestoreCollectionService } from '../../core/firestore/firestore-collection.service';

@Component({
  selector: 'oms-product-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products$: Observable<Stand[]>;

  constructor(@Inject(STAND_SERVICE_TOKEN) private standService: FirestoreCollectionService<Stand>) {
    this.products$ = this.standService.getAllData();
  }
}
