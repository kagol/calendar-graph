import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EMPTY_WEEK } from '../shared/symbol-array';
import { DEFAULT_DATE_FORMAT, LEGEND_COLOR } from './calendar.config';
import { calculateColumnNumber, getCompleteDateRange, getDateArr, textToSymbolArray, transpose } from './calendar.util';

@Component({
  selector: 'd-calendar-graph',
  templateUrl: './calendar-graph.component.html',
  styleUrls: ['./calendar-graph.component.scss']
})
export class CalendarGraphComponent implements OnInit {

  @Input() date;
  @Input() schedule = false;
  @Input() sourceData;
  @Input() text;
  @Input() theme;
  
  dateArr;
  legendColor = LEGEND_COLOR;
  colorData;

  ngOnInit() {
      let [ start, end ] = this.getDateRange(this.date);

      if (this.text) {
        end = this.getEndDate(start, this.text);
      }
      
      const dateRange = getCompleteDateRange([ start, end ]);
      
      const { columnNum } = calculateColumnNumber(dateRange);
      this.dateArr = getDateArr(dateRange);
      if (!this.sourceData) {
          if (this.text) {
              this.sourceData = transpose(textToSymbolArray(this.text));
          } else {
              const contributions = [];
              for(let i = 0; i < columnNum; i++) {
                  contributions.push(EMPTY_WEEK[0]);
              }
              this.sourceData = transpose(contributions);
          }
      }

      this.colorData = this.sourceData;
  }

  getDateRange(date) {
    let start = moment().subtract(1, 'years');
    let end = moment();
    if (typeof date === 'string') {
      start = moment(date);
      end = moment(date).add(1, 'years');
    } else if (Array.isArray(date) && date.length > 0) {
      const [ first, second ] = date;
      start = moment(first);
      end = moment(first).add(1, 'years');
      if (second) {
        end = moment(second);
      }
    }
    return [ start, end ];
  }

  // 根据文本动态计算结束日期
  getEndDate(start, text) {
    const dateColumn = textToSymbolArray(text); // 计算列数（周数）
    return moment(start).add(dateColumn.length, 'weeks');
  }

}
