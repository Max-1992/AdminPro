import { TestBed } from '@angular/core/testing';

import { ShearedService } from './sheared.service';

describe('ShearedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShearedService = TestBed.get(ShearedService);
    expect(service).toBeTruthy();
  });
});
