import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGraphComponent } from './calendar-graph.component';

describe('CalendarGraphComponent', () => {
  let component: CalendarGraphComponent;
  let fixture: ComponentFixture<CalendarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
