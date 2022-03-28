import { TestBed } from '@angular/core/testing';

import { DatarestaurantService } from './datarestaurant.service';

describe('DatarestaurantService', () => {
  let service: DatarestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatarestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
