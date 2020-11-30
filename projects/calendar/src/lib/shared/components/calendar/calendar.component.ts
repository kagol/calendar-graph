import * as moment from 'moment';
import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_DATE_FORMAT } from '../..//config';
import { getCalendarArr } from '../../util';

const WEEK_ARR = ['日', '一', '二', '三', '四', '五', '六'];

@Component({
  selector: 'd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() selected;

  weekArr = WEEK_ARR;
  calendarTable;
  dateFormat = DEFAULT_DATE_FORMAT;

  constructor() { }

  ngOnInit(): void {
    const monthCount = 0;
    const yearCount = 0;
    const showOtherMonth = true;
    this.calendarTable = getCalendarArr(moment().format(DEFAULT_DATE_FORMAT), monthCount, yearCount, showOtherMonth);
  }

}
