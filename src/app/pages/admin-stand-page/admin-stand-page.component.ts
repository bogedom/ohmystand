import { Component } from '@angular/core';
import { StandTableComponent } from '../../features/stand-table/stand-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Stand } from '../../core/api/stands/stand';

@Component({
  selector: 'oms-admin-stand-page',
  standalone: true,
  imports: [
    StandTableComponent
  ],
  templateUrl: './admin-stand-page.component.html',
  styleUrl: './admin-stand-page.component.scss'
})
export class AdminStandPageComponent {
  constructor(
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
  ) {
  }

  onEditStand(stand: Stand): void {
    this.router.navigate(['edit', stand.id], {relativeTo: this.activeRoute}).then();
  }
}
