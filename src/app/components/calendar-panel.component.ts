import { Component, Input, OnInit } from '@angular/core';
import { TCalendarPanel } from './calendar.type';
import { LEGEND_COLOR, ROW_NUMBER, LETTER_K, LETTER_D, LETTER_e, LETTER_v, LETTER_U, LETTER_I, LETTER_A, LETTER_S, LETTER_N, IMG_LOVE, EMPTY_WEEK } from './calendar.config';
import { generateArray, calculateColumnNumber, transpose } from './calendar.util';

@Component({
    selector: 'd-calendar-panel',
    template: `
        <div class="calendar-panel">
            <div [ngStyle]="{'font-size': 0}" *ngFor="let rowItem of contribArr">
                <d-color-cube 
                    [size]="10" 
                    [color]="columnItem ? '#c6e48b' : '#ebedf0'"
                    *ngFor="let columnItem of rowItem"
                ></d-color-cube>
            </div>
        </div>
    `,
    styles: [`
        .calendar-panel {
        }
    `]
})
export class CalendarPanel implements OnInit {
    @Input() dataSource: TCalendarPanel;
    rows: number[] = generateArray(ROW_NUMBER);
    columns: number[];
    contribArr = transpose([].concat(EMPTY_WEEK, LETTER_D, EMPTY_WEEK, LETTER_e, EMPTY_WEEK, LETTER_v, EMPTY_WEEK, LETTER_U, EMPTY_WEEK, LETTER_I, EMPTY_WEEK, EMPTY_WEEK, EMPTY_WEEK, EMPTY_WEEK, 
        LETTER_K, EMPTY_WEEK, IMG_LOVE, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_S, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_N, EMPTY_WEEK));
    // calendarArray: string[][];

    ngOnInit() {
        console.log('this.dataSource:', this.dataSource);
        // const [] = this.dataSource;
        // if () {}
        // const date = this.dataSource;
        // if () {}
        // for (let rowIndex = 0; rowIndex < ROW_NUMBER; rowIndex++) {
        //     let rowItem = [];
        //     for (let columnIndex = 0; columnIndex < calculateColumnNumber(date); columnIndex++) {}
        // }
        // console.log('calendarArray:', this.generateCalendarArray(this.dataSource));

        const columnNumber = calculateColumnNumber(this.dataSource as any);
        console.log('columnNumber:', columnNumber);
        this.columns = generateArray(columnNumber);
        console.log('this.columns:', this.columns);
        console.log('this.rows:', this.rows);        
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