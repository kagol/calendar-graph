import {
    LETTER_A, LETTER_a,
    LETTER_B, LETTER_b,
    LETTER_C, LETTER_c,
    LETTER_D, LETTER_d,
    LETTER_E, LETTER_e,
    LETTER_F, LETTER_f,
    LETTER_G, LETTER_g,
    LETTER_H, LETTER_h,
    LETTER_I, LETTER_i,
    LETTER_J, LETTER_j,
    LETTER_K, LETTER_k,
    LETTER_L, LETTER_l,
    LETTER_M, LETTER_m,
    LETTER_N, LETTER_n,
    LETTER_O, LETTER_o,
    LETTER_P, LETTER_p,
    LETTER_Q, LETTER_q,
    LETTER_R, LETTER_r,
    LETTER_S, LETTER_s,
    LETTER_T, LETTER_t,
    LETTER_U, LETTER_u,
    LETTER_V, LETTER_v,
    LETTER_W, LETTER_w,
    LETTER_X, LETTER_x,
    LETTER_Y, LETTER_y,
    LETTER_Z, LETTER_z,
    LETTER_0, LETTER_1,
    LETTER_2, LETTER_3,
    LETTER_4, LETTER_5,
    LETTER_6, LETTER_7,
    LETTER_8, LETTER_9,
    IMG_LOVE, EMPTY_WEEK,
} from '../shared/symbol-array';

// 由浅到深
export const LEGEND_COLOR = [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127', '#f00' ];

// 圣诞节主题
export const LEGEND_COLOR_HALLOWEEN = [ '#ebedf0', '#FFEE4A', '#FFC501', '#FE9600', '#03001C' ];

export const DEFAULT_ROW_NUMBER = 7;

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export const COLOR_MAP = (number: number, theme = LEGEND_COLOR) => {
    if (number === 0) {
        return theme[0];
    } else if (1 <= number && number <= 3) {
        return theme[1];
    } else if (4 <= number && number <= 6) {
        return theme[2];
    } else if (7 <= number && number <= 9) {
        return theme[3];
    } else if (number >= 10) {
        return theme[4];
    } else {
        return '';
    }
}

export const LOVEDEVUI = [].concat(EMPTY_WEEK, IMG_LOVE, EMPTY_WEEK, LETTER_D, EMPTY_WEEK, LETTER_e, EMPTY_WEEK, LETTER_v, EMPTY_WEEK, LETTER_U, EMPTY_WEEK, LETTER_I, EMPTY_WEEK);

export const KAGOLLOVEASAN = [].concat(EMPTY_WEEK, LETTER_K, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, IMG_LOVE, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_S, EMPTY_WEEK, LETTER_A, EMPTY_WEEK, LETTER_N, EMPTY_WEEK);

export const SYMBOL_MAP = {
    'A': LETTER_A,
    'a': LETTER_a,
    'B': LETTER_B,
    'b': LETTER_b,
    'C': LETTER_C,
    'c': LETTER_c,
    'D': LETTER_D,
    'd': LETTER_d,
    'E': LETTER_E,
    'e': LETTER_e,
    'F': LETTER_F,
    'f': LETTER_f,
    'G': LETTER_G,
    'g': LETTER_g,
    'H': LETTER_H,
    'h': LETTER_h,
    'I': LETTER_I,
    'i': LETTER_i,
    'J': LETTER_J,
    'j': LETTER_j,
    'K': LETTER_K,
    'k': LETTER_k,
    'L': LETTER_L,
    'l': LETTER_l,
    'M': LETTER_M,
    'm': LETTER_m,
    'N': LETTER_N,
    'n': LETTER_n,
    'O': LETTER_O,
    'o': LETTER_o,
    'P': LETTER_P,
    'p': LETTER_p,
    'Q': LETTER_Q,
    'q': LETTER_q,
    'R': LETTER_R,
    'r': LETTER_r,
    'S': LETTER_S,
    's': LETTER_s,
    'T': LETTER_T,
    't': LETTER_t,
    'U': LETTER_U,
    'u': LETTER_u,
    'V': LETTER_V,
    'v': LETTER_v,
    'W': LETTER_W,
    'w': LETTER_w,
    'X': LETTER_X,
    'x': LETTER_x,
    'Y': LETTER_Y,
    'y': LETTER_y,
    'Z': LETTER_Z,
    'z': LETTER_z,
    '0': LETTER_0,
    '1': LETTER_1,
    '2': LETTER_2,
    '3': LETTER_3,
    '4': LETTER_4,
    '5': LETTER_5,
    '6': LETTER_6,
    '7': LETTER_7,
    '8': LETTER_8,
    '9': LETTER_9,
    ' ': EMPTY_WEEK,
    '❤️': IMG_LOVE,
};
