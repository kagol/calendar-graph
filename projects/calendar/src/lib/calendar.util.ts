import * as moment from 'moment';
import { DEFAULT_ROW_NUMBER, DEFAULT_DATE_FORMAT } from './shared/config';
import { SYMBOL_MAP } from './calendar.config';

export function getCompleteDateRange(date) {
    let [ first, second ] = date;
    const today = new Date();
    let start = first;
    let end = second;
    if (!second) {
        if (moment(first).isBefore(today)) {
            start = first;
            end = today;
        } else {
            start = today;
            end = first;
        }
    }
    return [start, end];
}

export function calculateColumnNumber(date: string[] | Date[]) {
    let [start, end] = getCompleteDateRange(date);
    const startWeekNum = moment(start).format('d'); // 0, 1, ..., 6(周日 - 周六)
    const firstWeekNum = 7 - +startWeekNum;
    const endWeekNum = moment(end).format('d');
    const lastWeekNum = +endWeekNum + 1;
    const diffDay = moment(end).diff(moment(start), 'day') + 1;
    const columnNum = (diffDay - firstWeekNum - lastWeekNum) / 7 + 2;
    return {
        start,
        end,
        firstWeekNum,
        lastWeekNum,
        columnNum
    };
}

// 行列转换
export function transpose(A) {
    let result = [], rowItem = [];
    const rows = A.length;
    const cols = A[0].length;
    for(let i = 0;i < cols;i++){
        rowItem = [];
        for(let j = 0;j < rows;j++){
          rowItem.push(A[j][i]);
        }
        result.push(rowItem);
    }
    return result;
}

// 文字转字母数组
export function textToSymbolArray(text) {
    return text.split('').join(' ').split('')
    .map(char => SYMBOL_MAP[char] || SYMBOL_MAP[char.charCodeAt(0).toString(16)])
    .reduce((a, b) => a.concat(b), []);
}

export function getDateArr(dateRange) {
    // 根据日期渲染
    const { 
        firstWeekNum,
        columnNum 
    } = calculateColumnNumber(dateRange);
    const start = moment(dateRange[0]).add(firstWeekNum, 'days').format(DEFAULT_DATE_FORMAT);
    const dateArr = [];
    for (let rowIndex = 0; rowIndex < DEFAULT_ROW_NUMBER; rowIndex++) {
        let columns = [];
        for(let columnIndex = 0; columnIndex < columnNum; columnIndex++) {
            const columnDate = moment(start)
            .add(columnIndex * 7 + rowIndex, 'days')
            .format(DEFAULT_DATE_FORMAT);
            columns.push(columnDate);
        }
        dateArr.push(columns);
    }
    return dateArr;
}
