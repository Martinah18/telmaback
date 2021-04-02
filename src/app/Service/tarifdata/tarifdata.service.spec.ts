import { TestBed } from '@angular/core/testing';

import { TarifdataService } from './tarifdata.service';

describe('TarifdataService', () => {
  let service: TarifdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
