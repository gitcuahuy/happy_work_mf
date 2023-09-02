import { TestBed } from '@angular/core/testing';

import { HpShareService } from './hp-share.service';

describe('HpShareService', () => {
  let service: HpShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
