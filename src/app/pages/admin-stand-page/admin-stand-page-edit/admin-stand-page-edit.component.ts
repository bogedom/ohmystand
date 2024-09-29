import { Component } from '@angular/core';
import { StandFormComponent } from '../../../features/stand-form/stand-form.component';

@Component({
  selector: 'oms-admin-stand-page-edit',
  standalone: true,
  imports: [
    StandFormComponent
  ],
  templateUrl: './admin-stand-page-edit.component.html',
  styleUrl: './admin-stand-page-edit.component.scss'
})
export class AdminStandPageEditComponent {

}
