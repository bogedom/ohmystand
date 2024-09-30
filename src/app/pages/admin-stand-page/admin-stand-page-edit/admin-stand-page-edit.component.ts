import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { StandFormComponent } from '../../../features/stand-form/stand-form.component';
import { STAND_SERVICE_TOKEN } from '../../../core/api/stands/stand-service-token';
import { FirestoreCollectionService } from '../../../core/firestore/firestore-collection.service';
import { Stand } from '../../../core/api/stands/stand';
import { take, tap } from 'rxjs';
import { DocumentSnapshot } from '@firebase/firestore';

@Component({
  selector: 'oms-admin-stand-page-edit',
  standalone: true,
  imports: [
    StandFormComponent
  ],
  templateUrl: './admin-stand-page-edit.component.html',
  styleUrl: './admin-stand-page-edit.component.scss'
})
export class AdminStandPageEditComponent implements OnInit {
  @Input() id?: string;

  standDoc?: DocumentSnapshot;
  stand?: Partial<Stand>;

  constructor(@Inject(STAND_SERVICE_TOKEN) private readonly standService: FirestoreCollectionService<Stand>) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.loadStand(this.id);
    }
  }

  private loadStand(id: string): void {
    this.standService.getById(id)
      .pipe(
        tap((document) => {
          this.standDoc = document;
          this.stand = document.data();
        }),
        take(1)
      )
      .subscribe()
  }
}
