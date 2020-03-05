export const LEGEND_COLOR = [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127', '#f00' ];

export const DEFAULT_ROW_NUMBER = 7;

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export const COLOR_MAP = (number: number) => {
    if (number === 0) {
        return LEGEND_COLOR[0];
    } else if (1 <= number && number <= 3) {
        return LEGEND_COLOR[1];
    } else if (4 <= number && number <= 6) {
        return LEGEND_COLOR[2];
    } else if (7 <= number && number <= 9) {
        return LEGEND_COLOR[3];
    } else if (number >= 10) {
        return LEGEND_COLOR[4];
    } else {
        return '';
    }
}

export const LETTER_D = [
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1, 0, 0 ],
];

export const LETTER_e = [
    [ 0, 0, 2, 2, 2, 0, 0 ],
    [ 0, 2, 0, 2, 0, 2, 0 ],
    [ 0, 2, 0, 2, 0, 2, 0 ],
    [ 0, 0, 2, 2, 0, 2, 0 ],
];

export const LETTER_v = [
    [ 0, 3, 3, 3, 0, 0, 0 ],
    [ 0, 0, 0, 0, 3, 0, 0 ],
    [ 0, 0, 0, 0, 0, 3, 0 ],
    [ 0, 0, 0, 0, 3, 0, 0 ],
    [ 0, 3, 3, 3, 0, 0, 0 ],
];

export const LETTER_U = [
    [ 0, 4, 4, 4, 4, 0, 0 ],
    [ 0, 0, 0, 0, 0, 4, 0 ],
    [ 0, 0, 0, 0, 0, 4, 0 ],
    [ 0, 0, 0, 0, 0, 4, 0 ],
    [ 0, 4, 4, 4, 4, 0, 0 ],
];

export const LETTER_I = [
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 1, 1, 1, 1, 0 ],
];

export const LETTER_K = [
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 1, 0, 1, 0, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
];

export const LETTER_A = [
    [ 0, 0, 0, 1, 1, 1, 0 ],
    [ 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 1, 0, 0, 0 ],
    [ 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 1, 0 ],
];

export const LETTER_S = [
    [ 0, 0, 1, 0, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 0, 1, 0, 0 ],
];

export const LETTER_N = [
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 1, 1, 1, 1, 1, 0 ],
];

export const IMG_LOVE = [
    [ 0, 5, 5, 0, 0, 0, 0 ],
    [ 5, 0, 0, 5, 0, 0, 0 ],
    [ 5, 0, 0, 0, 5, 0, 0 ],
    [ 0, 5, 0, 0, 0, 5, 0 ],
    [ 0, 0, 5, 0, 0, 0, 5 ],
    [ 0, 5, 0, 0, 0, 5, 0 ],
    [ 5, 0, 0, 0, 5, 0, 0 ],
    [ 5, 0, 0, 5, 0, 0, 0 ],
    [ 0, 5, 5, 0, 0, 0, 0 ],
];

export const EMPTY_WEEK = [
    [ 0, 0, 0, 0, 0, 0, 0 ]
]

export const LOVEDEVUI = [].concat(EMPTY_WEEK, IMG_LOVE, EMPTY_WEEK, LETTER_D, EMPTY_WEEK, LETTER_e, EMPTY_WEEK, LETTER_v, EMPTY_WEEK, LETTER_U, EMPTY_WEEK, LETTER_I, EMPTY_WEEK, EMPTY_WEEK, EMPTY_WEEK);
