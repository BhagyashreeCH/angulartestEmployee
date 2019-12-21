import { TestBed } from '@angular/core/testing';

import { EmployeeInterviewRatingService } from './employee-interview-rating.service';

describe('EmployeeInterviewRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeInterviewRatingService = TestBed.get(EmployeeInterviewRatingService);
    expect(service).toBeTruthy();
  });
});
