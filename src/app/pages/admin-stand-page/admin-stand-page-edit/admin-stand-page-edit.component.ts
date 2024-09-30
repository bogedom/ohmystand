import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { StandFormComponent } from '../../../features-admin/stand-form/stand-form.component';
import { STAND_SERVICE_TOKEN } from '../../../core/api/stands/stand-service-token';
import { FirestoreCollectionService } from '../../../core/firestore/firestore-collection.service';
import { Stand } from '../../../core/api/stands/stand';
import { take, tap } from 'rxjs';
import { DocumentSnapshot } from '@firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  stand?: Partial<Stand>;

  constructor(
    @Inject(STAND_SERVICE_TOKEN) private readonly standService: FirestoreCollectionService<Stand>,
    private readonly toastr: ToastrService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.loadStand(this.id);
    }
  }

  onSaveStand(stand: Partial<Stand>): void {
    if (!this.id || !this.stand) {
      return;
    }

    this.standService.update(this.id, stand)
      .pipe(
        tap(() => {
          this.toastr.success('Updated');
          this.router.navigate(['admin', 'stands']).then();
        }),
        take(1)
      )
      .subscribe();
  }

  private loadStand(id: string): void {
    this.standService.getDocument(id)
      .pipe(
        tap((document) => {
          this.stand = document.data();
        }),
        take(1)
      )
      .subscribe()
  }
}
