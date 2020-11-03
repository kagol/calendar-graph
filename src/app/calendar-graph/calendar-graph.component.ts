import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EMPTY_WEEK } from '../shared/symbol-array';
import { DEFAULT_DATE_FORMAT, LEGEND_COLOR } from './calendar.config';
import { TMode } from './calendar.type';
import { calculateColumnNumber, getCompleteDateRange, getDateArr, textToSymbolArray, transpose } from './calendar.util';

@Component({
  selector: 'd-calendar-graph',
  templateUrl: './calendar-graph.component.html',
  styleUrls: ['./calendar-graph.component.scss']
})
export class CalendarGraphComponent implements OnInit {

  @Input() mode: TMode = 'calendar';
  @Input() dateRange;
  @Input() contributions;
  @Input() text;
  
  dateArr;
  legendColor = LEGEND_COLOR;
  colorData;

  ngOnInit() {
      const now = moment().format(DEFAULT_DATE_FORMAT);
      const lastYear = moment().subtract(1, "years").format(DEFAULT_DATE_FORMAT);
      
      let dateRange = [ lastYear, now ];
      if (this.dateRange) {
          dateRange = getCompleteDateRange(this.dateRange);
      }
      
      const { columnNum } = calculateColumnNumber(dateRange);
      this.dateArr = getDateArr(dateRange);
      if (!this.contributions) {
          if (this.text) {
              this.contributions = transpose(textToSymbolArray(this.text));
          } else {
              const contributions = [];
              for(let i = 0; i < columnNum; i++) {
                  contributions.push(EMPTY_WEEK[0]);
              }
              this.contributions = transpose(contributions);
          }
      }

      this.colorData = this.contributions;
  }

}
