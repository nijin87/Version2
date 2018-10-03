import { TestBed } from '@angular/core/testing';

import { EmClientService } from './em-client.service';

describe('EmClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmClientService = TestBed.get(EmClientService);
    expect(service).toBeTruthy();
  });
});
