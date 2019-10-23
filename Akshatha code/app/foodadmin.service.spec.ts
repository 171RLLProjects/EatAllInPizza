import { TestBed, inject } from '@angular/core/testing';

import { FoodadminService } from './foodadmin.service';

describe('FoodadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodadminService]
    });
  });

  it('should be created', inject([FoodadminService], (service: FoodadminService) => {
    expect(service).toBeTruthy();
  }));
});
