import { TestBed } from '@angular/core/testing';

import { ShardataBsService } from './shardata-bs.service';

describe('ShardataBsService', () => {
  let service: ShardataBsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShardataBsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
