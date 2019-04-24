import { TestBed } from '@angular/core/testing';

import { SetGoalService } from './set-goal.service';

describe('SetGoalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetGoalService = TestBed.get(SetGoalService);
    expect(service).toBeTruthy();
  });
});
