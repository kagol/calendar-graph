import { Component } from '@angular/core';
import { TCalendarPanel } from './components/calendar.type';
import { LOVEDEVUI } from './components/calendar.config';
import { transpose } from './components/calendar.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-graph';
  calendarData: TCalendarPanel = [ '2020-02-02', '2020-04-01' ];
  contributions = transpose(LOVEDEVUI);
}
