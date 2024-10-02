import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

const adminPageRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'stands'
      },
      {
        path: 'stands',
        loadChildren: () => import('../admin-stand-page/admin-stand-page.routes'),
        data: { breadcrumb: 'Stands' },
      },
      {
        path: 'storage',
        loadChildren: () => import('../admin-storage-page/admin-storage-page.routes'),
        data: { breadcrumb: 'Storage' },
      }
    ]
  },
];

export default adminPageRoutes;
