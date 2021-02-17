import { TestBed } from '@angular/core/testing';

import { GroupCompetenceService } from './group-competence.service';

describe('GroupCompetenceService', () => {
  let service: GroupCompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupCompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
