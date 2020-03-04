import { Component } from '@angular/core';
import { TCalendarPanel } from './components/calendar.type';
import { LEGEND_COLOR, LETTER_K, LETTER_A, IMG_LOVE } from './components/calendar.config';
import { transpose } from './components/calendar.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-graph';
  calendarData: TCalendarPanel = [ '2020-02-02', '2020-04-01' ]; // [ '2020-04-01' ]; // [ '2020-02-01' ];
  // [
  //   { date: '2019-06-01', color: '#ebedf0', number: 0 },
  //   { date: '2019-06-01', color: '#c6e48b', number: 1 },
  //   { date: '2019-06-01', color: '#7bc96f', number: 4 },
  //   { date: '2019-06-01', color: '#239a3b', number: 7 },
  //   { date: '2019-06-01', color: '#196127', number: 10 },
  // ]
  // [ '2020-02-01' ]
  // [ '2020-04-01' ]
  // [ '2020-02-01', '2020-04-01' ]
  contributions = transpose([].concat(LETTER_K, IMG_LOVE, LETTER_A))
}
