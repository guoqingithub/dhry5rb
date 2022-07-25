import { TestBed } from '@angular/core/testing';

import { DialogProjectBlankService } from './dialog-project-blank.service';

describe('DialogProjectBlankService', () => {
  let service: DialogProjectBlankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogProjectBlankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
