import { TestBed } from '@angular/core/testing';

import { DdsapGlobalDataService } from './ddsap-global-data.service';

describe('DdsapGlobalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DdsapGlobalDataService = TestBed.get(DdsapGlobalDataService);
    expect(service).toBeTruthy();
  });
});
