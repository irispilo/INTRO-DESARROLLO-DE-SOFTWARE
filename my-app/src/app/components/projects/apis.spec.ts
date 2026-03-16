import { TestBed } from '@angular/core/testing';

import { Apis } from './/apis';

describe('Apis', () => {
  let service: Apis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
