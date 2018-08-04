import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProgressStepperComponent } from './ng-progress-stepper.component';

describe('NgProgressStepperComponent', () => {
  let component: NgProgressStepperComponent;
  let fixture: ComponentFixture<NgProgressStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgProgressStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgProgressStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
