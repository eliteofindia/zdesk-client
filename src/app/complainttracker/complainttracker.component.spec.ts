import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainttrackerComponent } from './complainttracker.component';

describe('ComplainttrackerComponent', () => {
  let component: ComplainttrackerComponent;
  let fixture: ComponentFixture<ComplainttrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainttrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
