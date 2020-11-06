import * as moment from 'moment';
import kt from '@kagol/ktools/ktools.esm';
import { CONTRIBUTION_RANGE, LEGEND_COLOR, DATE_ROW_COUNT } from './config';

const { stairStepAccessTable } = kt;

// 根据贡献次数获取相应的颜色（表驱动法）
export function getColor(contributionNumber: number, contributionRange = CONTRIBUTION_RANGE, theme = LEGEND_COLOR) {
  return stairStepAccessTable(contributionNumber, contributionRange, theme);
}

/**
 * 获取某一周的周数组
 * @param {某个日期} date 
 * @param {第几周} num 
 * @param {数组的值的格式} format 
 */
export function getWeekArr(date, num, showOtherMonth, format?) {
    let weekArr = [];
    let dateMoment = date;
    if(!moment.isMoment(date)){
        dateMoment = moment(date);
    }
    const thisMonth = dateMoment.format('M');
    let index = dateMoment.format('d');
    let firstDay = -index+num*7;
    let lastDay = 7-index+num*7;
    for(let day=firstDay;day<lastDay;day++){
        let weekItem = moment(dateMoment).add(day, 'days');
        let formatWeekItem = weekItem;
        // if(format){
        //     formatWeekItem = weekItem.format(format);
        // }
        if(!showOtherMonth && thisMonth !== formatWeekItem.format('M')){
            formatWeekItem = null;
        }
        weekArr.push(formatWeekItem);
    }
    return weekArr;
}

/**
 * 获取一个月的第一天
 * @param {某个日期} date 
 */
export function getFirstDayOfMonth(date, monthNum, yearNum) {
    let dateMoment = date;
    if(!moment.isMoment(date)){
        dateMoment = moment(date);
    }
    let year = moment(dateMoment).add(yearNum, 'years').add(monthNum, 'months').format('YYYY');
    let month = moment(dateMoment).add(yearNum, 'years').add(monthNum, 'months').format('MM');
    // let month = dateMoment.format('MM');
    let day = '01';
    let firstDayOfMonth = year+'-'+month+'-'+day;
    return firstDayOfMonth;
}

/**
 * 获取日历数组
 * @param {某个日期} date 
 */
export function getCalendarArr(date, monthNum=0, yearNum=0, showOtherMonth=true) {
  let calendarArr = [];
  let firstDayOfMonth = getFirstDayOfMonth(date, monthNum, yearNum);
  for(let row = 0; row < DATE_ROW_COUNT; row++){
      let rowArr = getWeekArr(firstDayOfMonth, row, showOtherMonth);
      calendarArr.push(rowArr);
  }
  return calendarArr;
}
