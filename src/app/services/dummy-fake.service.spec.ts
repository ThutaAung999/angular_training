import { TestBed } from '@angular/core/testing';

import { DummyFakeService } from './dummy-fake.service';

describe('DummyFakeService', () => {
  let service: DummyFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
