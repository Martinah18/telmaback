import { TestBed } from '@angular/core/testing';

import { TelmaService } from './telma.service';

describe('TelmaService', () => {
  let service: TelmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
