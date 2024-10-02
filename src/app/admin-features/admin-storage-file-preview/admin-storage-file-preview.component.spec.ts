import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStorageFilePreviewComponent } from './admin-storage-file-preview.component';

describe('AdminStorageFilePreviewComponent', () => {
  let component: AdminStorageFilePreviewComponent;
  let fixture: ComponentFixture<AdminStorageFilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStorageFilePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStorageFilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
