import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBucketComponent } from './header-bucket.component';

describe('HeaderBucketComponent', () => {
  let component: HeaderBucketComponent;
  let fixture: ComponentFixture<HeaderBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBucketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
