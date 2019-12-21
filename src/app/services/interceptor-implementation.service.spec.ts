import { TestBed } from '@angular/core/testing';

import { InterceptorImplementationService } from './interceptor-implementation.service';

describe('InterceptorImplementationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorImplementationService = TestBed.get(InterceptorImplementationService);
    expect(service).toBeTruthy();
  });
});
