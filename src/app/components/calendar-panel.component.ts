import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TCalendarPanel, TMode, TLegendColor } from './calendar.type';
import { LEGEND_COLOR, DEFAULT_DATE_FORMAT, DEFAULT_ROW_NUMBER, LETTER_K, LETTER_D, LETTER_e, LETTER_v, LETTER_U, LETTER_I, LETTER_A, LETTER_S, LETTER_N, IMG_LOVE, EMPTY_WEEK } from './calendar.config';
import { generateArray, calculateColumnNumber, transpose, 
    getWeekArr, getDateArr, getCompleteDateRange } from './calendar.util';

const DEVUI = [].concat(EMPTY_WEEK, LETTER_D, EMPTY_WEEK, LETTER_e, EMPTY_WEEK, LETTER_v, EMPTY_WEEK, LETTER_U, EMPTY_WEEK, LETTER_I, EMPTY_WEEK, EMPTY_WEEK, EMPTY_WEEK);
const KLOVEASAN = [].concat(EMPTY_WEEK, LETTER_K, EMPTY_WEEK, IMG_LOVE, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_S, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_N, EMPTY_WEEK)

@Component({
    selector: 'd-calendar-panel',
    template: `
        <div class="calendar-panel">
            <!--<div [ngStyle]="{'font-size': 0}" *ngFor="let rowItem of contribArr;let rowIndex = index">
                <d-color-cube 
                    [size]="10" 
                    [color]="columnItem ? '#c6e48b' : '#ebedf0'"
                    *ngFor="let columnItem of rowItem"
                ></d-color-cube>
            </div>-->
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
    
    @Input() dataSource: TCalendarPanel;
    rows: number[];
    columns: number[];
    dateArr;
    contribArr = transpose([].concat(LETTER_I));
    // calendarArray: string[][];
    legendColor = LEGEND_COLOR;

    ngOnInit() {
        console.log('this.dataSource:', this.dataSource);
        console.log('this.contribArr:', this.contribArr);
        // const [] = this.dataSource;
        // if () {}
        // const date = this.dataSource;
        // if () {}
        // for (let rowIndex = 0; rowIndex < DEFAULT_ROW_NUMBER; rowIndex++) {
        //     let rowItem = [];
        //     for (let columnIndex = 0; columnIndex < calculateColumnNumber(date); columnIndex++) {}
        // }
        // console.log('calendarArray:', this.generateCalendarArray(this.dataSource));

        // const columnNumber = calculateColumnNumber(this.dataSource as any);
        // console.log('columnNumber:', columnNumber);
        // this.columns = generateArray(columnNumber);
        // console.log('this.columns:', this.columns);
        // console.log('this.rows:', this.rows);

        // 根据日期渲染
        const now = moment().format(DEFAULT_DATE_FORMAT);
        const lastYear = moment().subtract(1, "years").format(DEFAULT_DATE_FORMAT);
        // console.log('now:', now);
        // console.log('lastYear:', lastYear);
        // const { 
        //     firstWeekNum,
        //     lastWeekNum,
        //     columnNum 
        // } = calculateColumnNumber([lastYear, now]);
        // console.log('columnNum:', columnNum);
        // const start = moment(lastYear).add(firstWeekNum, 'days').format(dateFormat);
        // const end = moment(now).subtract(lastWeekNum, 'days');
        // this.columns = generateArray(columnNum);
        // const dateArr = [];
        // for (let rowIndex = 0; rowIndex < DEFAULT_ROW_NUMBER; rowIndex++) {
        //     let columns = [];
        //     for(let columnIndex = 0; columnIndex < columnNum; columnIndex++) {
        //         const columnDate = moment(start).add(columnIndex * 7 + rowIndex, 'days').format(dateFormat);
        //         columns.push(columnDate);
        //     }
        //     dateArr.push(columns);
        // }
        
        let dateRange = [ lastYear, now ];
        if (this.dateRange) {
            console.log('this.dateRange:', this.dateRange);
            dateRange = getCompleteDateRange(this.dateRange);
        }
        console.log('dateRange:', dateRange);
        
        const { columnNum } = calculateColumnNumber(dateRange);
        console.log('columnNum:', columnNum);
        this.dateArr = getDateArr(dateRange);
        console.log('this.dateArr:', this.dateArr);
        if (!this.contributions) {
            const contributions = [];
            for(let i = 0; i < columnNum; i++) {
                contributions.push(EMPTY_WEEK[0]);
            }
            console.log('contributions:', transpose(contributions));
            this.contributions = transpose(contributions);
        }
        
        this.rows = generateArray(DEFAULT_ROW_NUMBER);
    }

    generateCalendarArray(data) {
        console.log('data:', data);
        if(!Array.isArray(data)) {
            return;
        }
        const [ firstItem ] = data;
        if (typeof firstItem === 'string' || firstItem instanceof Date) {
            const date: string[] | Date[] = data;
            const columnNumber = calculateColumnNumber(date);
            console.log('columnNumber:', columnNumber);
        }

    }
}
