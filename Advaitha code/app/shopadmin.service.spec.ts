import { TestBed, inject } from '@angular/core/testing';

import { ShopadminService } from './shopadmin.service';

describe('ShopadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopadminService]
    });
  });

  it('should be created', inject([ShopadminService], (service: ShopadminService) => {
    expect(service).toBeTruthy();
  }));
});
