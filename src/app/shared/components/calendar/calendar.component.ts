import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { DEFAULT_DATE_FORMAT } from '@shared/config';
import { getCalendarArr } from '@shared/util';

const WEEK_ARR = ['日', '一', '二', '三', '四', '五', '六'];

@Component({
  selector: 'd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  weekArr = WEEK_ARR;
  calendarTable;
  dateFormat = DEFAULT_DATE_FORMAT;

  constructor() { }

  ngOnInit(): void {
    const monthCount = 0;
    const yearCount = 0;
    const showOtherMonth = true;
    this.calendarTable = getCalendarArr(moment().format(DEFAULT_DATE_FORMAT), monthCount, yearCount, showOtherMonth);
    console.log('this.calendarTable:', this.calendarTable);
  }

}
