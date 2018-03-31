import { TestBed, inject } from '@angular/core/testing';

import { MillerService } from './miller.service';

describe('MillerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MillerService]
    });
  });

  it('should be created', inject([MillerService], (service: MillerService) => {
    expect(service).toBeTruthy();
  }));
});
