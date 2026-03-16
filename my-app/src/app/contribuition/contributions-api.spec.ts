import { TestBed } from '@angular/core/testing';

import { ContributionsApi } from './contributions-api';

describe('ContributionsApi', () => {
  let service: ContributionsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributionsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
