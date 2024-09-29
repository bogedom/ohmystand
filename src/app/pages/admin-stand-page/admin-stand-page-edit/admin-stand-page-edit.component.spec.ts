import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStandPageEditComponent } from './admin-stand-page-edit.component';

describe('AdminStandPageEditComponent', () => {
  let component: AdminStandPageEditComponent;
  let fixture: ComponentFixture<AdminStandPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStandPageEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStandPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
