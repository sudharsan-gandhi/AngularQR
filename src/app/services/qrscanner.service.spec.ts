import { TestBed, inject } from '@angular/core/testing';

import { QrscannerService } from './qrscanner.service';

describe('QrscannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrscannerService]
    });
  });

  it('should be created', inject([QrscannerService], (service: QrscannerService) => {
    expect(service).toBeTruthy();
  }));
});
