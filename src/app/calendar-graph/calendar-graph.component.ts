import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EMPTY_WEEK } from '@shared/symbol-array';
import { DEFAULT_CONTRIBUTION_RANGE, DEFAULT_DATE_FORMAT, DEFAULT_THEME, THEME_MAP } from '@shared/config';
import { getColor, isPlainObject, isColor } from '@shared/util';
import { calculateColumnNumber, getCompleteDateRange, getDateArr, textToSymbolArray } from './calendar.util';
import { TTheme } from './calendar.type';

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

  ngOnInit() {
    console.log('this.dataSource:', this.dataSource);
    
    const contributionNum = 7;
    const contributionRangeArray = [0, 3, 6, 9, 10];
    const colorArray = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    this.source = contributionRangeArray;
    this.target = colorArray;
    const color = getColor(contributionNum, contributionRangeArray, colorArray);
    console.log('color:', color); // '#239a3b'

    console.log('this.theme:', this.theme);
    if (this.theme) {
      const { source, target } = this.prepareTheme(this.theme);
      this.source = source;
      this.target = target;
    }

    let [start, end] = this.getDateRange(this.date);

    if (this.text) {
      end = this.getEndDate(start, this.text);
    }

    const dateRange = getCompleteDateRange([start, end]);
    this.completeDateRange = dateRange;

    const { columnNum } = calculateColumnNumber(dateRange);
    this.dateArr = getDateArr(dateRange); // TODO: 日期数组计算有误，将导致渲染出来的日期错误
    if (!this.dataSource) {
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

    this.colorData = this.dataSource;

    if (this.schedule) {
      this.showSchedule();
    }
  }

  prepareTheme(theme) {
    console.log('prepareTheme theme:', theme);
    if (typeof theme === 'string') {
      console.log('is string', theme);
      if (isColor(theme)) {
        // TODO 这里需要根据颜色值获取到渐变值
        console.log('is color', theme);
      } else {
        console.log('is theme name', theme);
        return {
          source: DEFAULT_CONTRIBUTION_RANGE,
          target: THEME_MAP[theme]
        };
      }
    } else if (Array.isArray(theme)) {
      console.log('is array', theme);
      return {
        source: DEFAULT_CONTRIBUTION_RANGE,
        target: theme
      };
    } else if (isPlainObject(theme)) {
      console.log('is object', theme);
      const { source, target } = theme;
      if (source && target) {
        return theme;
      }
      return {
        source: Object.keys(theme),
        target: Object.values(theme),
      };
    } else {
      throw new Error('The theme is invalid.');
    }
    return theme;
  }

  getDateRange(date) {
    let start = moment().subtract(1, 'years');
    let end = moment();
    if (typeof date === 'string') {
      start = moment(date);
      end = moment(date).add(1, 'years');
    } else if (Array.isArray(date) && date.length > 0) {
      const [first, second] = date;
      start = moment(first);
      end = moment(first).add(1, 'years');
      if (second) {
        end = moment(second);
      }
    }
    return [start, end];
  }

  // 根据文本动态计算结束日期
  getEndDate(start, text) {
    const dateColumn = textToSymbolArray(text); // 计算列数（周数）
    return moment(start).add(dateColumn.length, 'weeks');
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
