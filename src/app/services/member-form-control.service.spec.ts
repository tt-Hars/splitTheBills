import { TestBed } from '@angular/core/testing';

import { MemberFormControlService } from './member-form-control.service';

describe('MemberFormControlService', () => {
  let service: MemberFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
