export type TLegendColor = '#ebedf0' | '#c6e48b' | '#7bc96f' | '#239a3b' | '#196127';
export type TMode = 'calendar' | 'free';

export interface ICalendarOption {
    date: Date | string,
    number?: number,
    color?: TLegendColor,
}

export type TCalendarPanel = ICalendarOption[] | string[];
