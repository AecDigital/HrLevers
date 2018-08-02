import { TestBed, inject } from '@angular/core/testing';

import { ActionPlansService } from './action-plans.service';

describe('ActionPlansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionPlansService]
    });
  });

  it('should be created', inject([ActionPlansService], (service: ActionPlansService) => {
    expect(service).toBeTruthy();
  }));
});
