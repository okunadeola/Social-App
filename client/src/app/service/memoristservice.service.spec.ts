import { TestBed } from '@angular/core/testing';

import { MemoristserviceService } from './memoristservice.service';

describe('MemoristserviceService', () => {
  let service: MemoristserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoristserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
