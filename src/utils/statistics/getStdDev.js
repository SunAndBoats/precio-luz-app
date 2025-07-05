// /utils/statistics/getStdDev.js

import {getVariance} from './getVariance.js'
export function getStdDev(data) {
    const variance = getVariance(data);
    return variance !== null ? +Math.sqrt(variance).toFixed(4) : null;
  }