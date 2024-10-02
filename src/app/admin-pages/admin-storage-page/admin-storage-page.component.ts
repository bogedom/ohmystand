import { Component } from '@angular/core';
import { AdminStorageListComponent } from '../../admin-features/admin-storage-list/admin-storage-list.component';
import {
  AdminStorageFilePreviewComponent
} from '../../admin-features/admin-storage-file-preview/admin-storage-file-preview.component';
// @ts-ignore
import { Reference } from '@angular/fire/compat/storage/interfaces';

@Component({
  selector: 'oms-admin-storage-page',
  standalone: true,
  imports: [
    AdminStorageListComponent,
    AdminStorageFilePreviewComponent
  ],
  templateUrl: './admin-storage-page.component.html',
  styleUrl: './admin-storage-page.component.scss'
})
export class AdminStoragePageComponent {
  selectedItem: Reference;
}
