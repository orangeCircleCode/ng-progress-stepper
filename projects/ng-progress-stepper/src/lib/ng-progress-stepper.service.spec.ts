import { TestBed, inject } from '@angular/core/testing';

import { NgProgressStepperService } from './ng-progress-stepper.service';

describe('NgProgressStepperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgProgressStepperService]
    });
  });

  it('should be created', inject([NgProgressStepperService], (service: NgProgressStepperService) => {
    expect(service).toBeTruthy();
  }));
});
