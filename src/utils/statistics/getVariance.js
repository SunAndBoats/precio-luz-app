// /utils/statistics/getVariance.js

import { getAverage } from './getAverage.js';

export function getVariance(data) {
    if (data.length === 0) return null;
    const mean = getAverage(data);
    const variance =
      data.reduce((acc, d) => acc + Math.pow(d.price - mean, 2), 0) / data.length;
    return +variance.toFixed(4);
  }