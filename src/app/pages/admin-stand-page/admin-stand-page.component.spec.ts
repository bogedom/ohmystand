import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStandPageComponent } from './admin-stand-page.component';

describe('AdminStandsPageComponent', () => {
  let component: AdminStandPageComponent;
  let fixture: ComponentFixture<AdminStandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStandPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
