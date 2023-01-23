import { TestBed } from '@angular/core/testing';

import { AllTextService } from './all-text.service';

describe('AllTextService', () => {
  let service: AllTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
