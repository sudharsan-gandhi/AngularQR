import { TestBed, inject } from '@angular/core/testing';

import { GateOperatorService } from './gate-operator.service';

describe('GateOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GateOperatorService]
    });
  });

  it('should be created', inject([GateOperatorService], (service: GateOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
