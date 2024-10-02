import { Routes } from '@angular/router';
import { AdminStoragePageComponent } from './admin-storage-page.component';

const adminStandPageRoutes: Routes = [
  {
    path: '',
    component: AdminStoragePageComponent,
    data: { breadcrumb: 'List' },
  },
];

export default adminStandPageRoutes;
