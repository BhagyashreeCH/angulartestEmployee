import { TestBed } from '@angular/core/testing';

import { TestserverService } from './testserver.service';

describe('TestserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestserverService = TestBed.get(TestserverService);
    expect(service).toBeTruthy();
  });
});
