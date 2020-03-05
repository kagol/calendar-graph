import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DEFAULT_DATE_FORMAT, EMPTY_WEEK, LEGEND_COLOR } from './calendar.config';
import { TMode } from './calendar.type';
import { calculateColumnNumber, getCompleteDateRange, getDateArr, transpose } from './calendar.util';

@Component({
    selector: 'd-calendar-panel',
    template: `
        <div class="calendar-panel">
            <div class="calendar-row" *ngFor="let rowItem of dateArr;let rowIndex = index">
                <d-color-cube 
                    dTooltip 
                    [content]="columnItem" 
                    [size]="12" 
                    [color]="legendColor[contributions[rowIndex][columnIndex]]"
                    *ngFor="let columnItem of rowItem;let columnIndex = index"
                ></d-color-cube>
            </div>
        </div>
    `,
    styleUrls: ['./calendar-panel.component.scss']
})
export class CalendarPanel implements OnInit {
    @Input() mode: TMode = 'calendar';
    @Input() dateRange;
    @Input() contributions;
    
    dateArr;
    legendColor = LEGEND_COLOR;

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
            const contributions = [];
            for(let i = 0; i < columnNum; i++) {
                contributions.push(EMPTY_WEEK[0]);
            }
            this.contributions = transpose(contributions);
        }
    }
}
