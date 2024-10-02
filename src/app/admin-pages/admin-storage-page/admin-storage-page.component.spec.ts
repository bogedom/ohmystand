import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStoragePageComponent } from './admin-storage-page.component';

describe('AdminStoragePageComponent', () => {
  let component: AdminStoragePageComponent;
  let fixture: ComponentFixture<AdminStoragePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStoragePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStoragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
