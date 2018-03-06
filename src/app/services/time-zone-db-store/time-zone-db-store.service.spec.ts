import { TestBed, inject } from '@angular/core/testing';

import { TimeZoneDbStoreService } from './time-zone-db-store.service';

describe('TimeZoneDbStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeZoneDbStoreService]
    });
  });

  it('should be created', inject([TimeZoneDbStoreService], (service: TimeZoneDbStoreService) => {
    expect(service).toBeTruthy();
  }));
});
