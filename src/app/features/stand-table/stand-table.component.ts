import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Stand } from '../../core/api/stands/stand';
import { STAND_SERVICE_TOKEN } from '../../core/api/stands/stand-service-token';
import { FirestoreCollectionService } from '../../core/firestore/firestore-collection.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'oms-stand-table',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './stand-table.component.html',
  styleUrl: './stand-table.component.scss'
})
export class StandTableComponent {
  @Output() editClick = new EventEmitter<Stand>();

  stands$: Observable<Stand[]>;

  constructor(
    @Inject(STAND_SERVICE_TOKEN) private standService: FirestoreCollectionService<Stand>
  ) {
    this.stands$ = this.standService.getAllData();
  }

  onEdit(stand: Stand): void {
    this.editClick.emit(stand);
  }
}
