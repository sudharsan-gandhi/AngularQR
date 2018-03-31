import { TestBed, inject } from '@angular/core/testing';

import { DepotManagerService } from './depot-manager.service';

describe('DepotManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepotManagerService]
    });
  });

  it('should be created', inject([DepotManagerService], (service: DepotManagerService) => {
    expect(service).toBeTruthy();
  }));
});
