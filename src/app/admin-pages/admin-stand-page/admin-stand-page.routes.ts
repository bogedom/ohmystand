import { Routes } from '@angular/router';
import { AdminStandPageComponent } from './admin-stand-page.component';
import { AdminStandPageEditComponent } from './admin-stand-page-edit/admin-stand-page-edit.component';

const adminStandPageRoutes: Routes = [
  {
    path: '',
    component: AdminStandPageComponent,
    data: { breadcrumb: 'List' },
  },
  {
    path: 'edit/:id',
    component: AdminStandPageEditComponent,
    data: { breadcrumb: 'Edit' },
  },
];

export default adminStandPageRoutes;
