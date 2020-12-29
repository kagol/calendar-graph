import { Injectable } from '@angular/core';
import moment from 'moment';

import { DEFAULT_CONTRIBUTION_RANGE, THEME_MAP } from './shared/config';
import { isPlainObject, isColor } from './shared/util';
import { textToSymbolArray } from './calendar.util';

@Injectable({
  providedIn: 'root'
})
export class CalendarGraphService {
  prepareTheme(theme) {
    console.log('prepareTheme theme:', theme);
    if (typeof theme === 'string') {
      console.log('is string', theme);
      if (isColor(theme)) {
        // TODO 这里需要根据颜色值获取到渐变值
        console.log('is color', theme);
      } else {
        // 主题名
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
}
