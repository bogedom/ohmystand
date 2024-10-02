import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandFormComponent } from './stand-form.component';

describe('StandFormComponent', () => {
  let component: StandFormComponent;
  let fixture: ComponentFixture<StandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
