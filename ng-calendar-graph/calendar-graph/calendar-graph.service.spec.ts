import { TestBed } from '@angular/core/testing';

import { CalendarGraphService } from './calendar-graph.service';

describe('CalendarGraphService', () => {
  let service: CalendarGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
