import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStorageListComponent } from './admin-storage-list.component';

describe('AdminStorageListComponent', () => {
  let component: AdminStorageListComponent;
  let fixture: ComponentFixture<AdminStorageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStorageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStorageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
