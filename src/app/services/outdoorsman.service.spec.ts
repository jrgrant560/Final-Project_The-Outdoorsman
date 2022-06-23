import { TestBed } from '@angular/core/testing';

import { OutdoorsmanService } from './outdoorsman.service';

describe('OutdoorsmanService', () => {
  let service: OutdoorsmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutdoorsmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
