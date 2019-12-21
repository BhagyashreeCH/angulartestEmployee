import { TestBed } from '@angular/core/testing';

import { GetOrdersService } from './get-orders.service';

describe('GetOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetOrdersService = TestBed.get(GetOrdersService);
    expect(service).toBeTruthy();
  });
});
