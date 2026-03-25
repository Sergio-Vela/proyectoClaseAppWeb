import { TestBed } from '@angular/core/testing';

import { FakeAuth } from './fake-auth';

describe('FakeAuth', () => {
  let service: FakeAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
