import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { EMPTY_WEEK } from './shared/symbol-array';
import { DEFAULT_DATE_FORMAT, DEFAULT_THEME } from './shared/config';
import { getColor } from './shared/util';
import { calculateColumnNumber, getCompleteDateRange, getDateArr, textToSymbolArray } from './calendar.util';
import { TTheme } from './calendar.type';
import { CalendarGraphService } from './calendar-graph.service';

@Component({
  selector: 'd-calendar-graph',
  templateUrl: './calendar-graph.component.html',
  styleUrls: ['./calendar-graph.component.scss']
})
export class CalendarGraphComponent implements OnInit {
  @Input() date;
  @Input() schedule = false;
  @Input() dataSource;
  @Input() text;
  @Input() theme: TTheme;

  dateArr;
  legendColor = DEFAULT_THEME;
  colorData;
  completeDateRange;
  scheduleArray = [];
  scheduleMap = {};
  source;
  target;

  constructor(
    private calendarGraphService: CalendarGraphService
  ) {}

  ngOnInit() {
    this.constructColorPipeParam();

    const dateRange = this.prepareDateRange();
    this.completeDateRange = dateRange;
    console.log('this.completeDateRange:', this.completeDateRange);
    this.dateArr = getDateArr(dateRange); // TODO: 日期数组计算有误，将导致渲染出来的日期错误
    console.log('this.dateArr:', this.dateArr);

    if (!this.dataSource) {
      this.constructDataSource();
    }

    this.colorData = this.dataSource;
    console.log('this.colorData:', this.colorData);

    if (this.schedule) {
      this.showSchedule();
    }
  }

  prepareDateRange() {
    let [start, end] = this.calendarGraphService.getDateRange(this.date);
    if (this.text) {
      end = this.calendarGraphService.getEndDate(start, this.text);
    }
    return getCompleteDateRange([start, end]);
  }

  constructDataSource() {
    const dateRange = this.prepareDateRange();
    const { columnNum } = calculateColumnNumber(dateRange);
    if (this.text) {
      this.dataSource = textToSymbolArray(this.text);
    } else {
      const contributions = [];
      for (let i = 0; i < columnNum; i++) {
        contributions.push(EMPTY_WEEK[0]);
      }
      this.dataSource = contributions;
    }
  }

  constructColorPipeParam() {
    const contributionNum = 7;
    const contributionRangeArray = [0, 3, 6, 9, 10];
    const colorArray = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    const color = getColor(contributionNum, contributionRangeArray, colorArray);
    // console.log('color:', color); // '#239a3b'
    this.source = contributionRangeArray;
    this.target = colorArray;

    if (this.theme) {
      const { source, target } = this.calendarGraphService.prepareTheme(this.theme);
      this.source = source;
      this.target = target;
    }
  }

  showSchedule() {
    const symbolArray = textToSymbolArray(this.text);
    const numberArray = symbolArray.reduce((a, b) => a.concat(b), []);
    const [start] = this.completeDateRange;
    for (const index in numberArray) {
      const date = moment(start).add(index, 'days').format(DEFAULT_DATE_FORMAT);
      const number = numberArray[index];
      if (number > 0) {
        // console.log(`您需要在${date}提交${number}次`);
        this.scheduleArray.push([ date, number ]);
        this.scheduleMap[date] = number;
      }
    }
  }

}
