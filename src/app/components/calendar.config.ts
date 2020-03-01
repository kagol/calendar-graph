export const LEGEND_COLOR = [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127' ];

export const ROW_NUMBER = 7;

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
    [ 0, 0, 1, 1, 1, 0, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 0, 1, 1, 0, 1, 0 ],
];

export const LETTER_v = [
    [ 0, 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 1, 1, 1, 0, 0, 0 ],
];

export const LETTER_U = [
    [ 0, 1, 1, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 1, 1, 1, 1, 0, 0 ],
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
    [ 0, 1, 1, 0, 0, 0, 0 ],
    [ 1, 0, 0, 1, 0, 0, 0 ],
    [ 1, 0, 0, 0, 1, 0, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 0, 0, 0, 1 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 1, 0, 0, 0, 1, 0, 0 ],
    [ 1, 0, 0, 1, 0, 0, 0 ],
    [ 0, 1, 1, 0, 0, 0, 0 ],
];

export const EMPTY_WEEK = [
    [ 0, 0, 0, 0, 0, 0, 0 ]
]
