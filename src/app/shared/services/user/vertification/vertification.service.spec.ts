import { TestBed } from '@angular/core/testing';

import { VertificationService } from './vertification.service';

describe('VertificationService', () => {
  let service: VertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
