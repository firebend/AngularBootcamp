import { TestBed } from '@angular/core/testing';

import { TotalClicksService } from './total-clicks.service';

describe('TotalClicksService', () => {
  let service: TotalClicksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalClicksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
