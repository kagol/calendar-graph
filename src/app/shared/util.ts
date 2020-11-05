import kt from '@kagol/ktools/ktools.esm';
import { CONTRIBUTION_RANGE, LEGEND_COLOR } from './config';

const { stairStepAccessTable } = kt;

// 根据贡献次数获取相应的颜色（表驱动法）
export function getColor(contributionNumber: number, contributionRange = CONTRIBUTION_RANGE, theme = LEGEND_COLOR) {
  return stairStepAccessTable(contributionNumber, contributionRange, theme);
}