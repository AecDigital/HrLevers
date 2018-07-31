import { TestBed, inject } from '@angular/core/testing';

import { AllemployeesService } from './allemployees.service';

describe('AllemployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllemployeesService]
    });
  });

  it('should be created', inject([AllemployeesService], (service: AllemployeesService) => {
    expect(service).toBeTruthy();
  }));
});
