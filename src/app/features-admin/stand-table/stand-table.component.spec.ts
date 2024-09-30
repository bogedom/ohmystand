import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandTableComponent } from './stand-table.component';

describe('StandTableComponent', () => {
  let component: StandTableComponent;
  let fixture: ComponentFixture<StandTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
