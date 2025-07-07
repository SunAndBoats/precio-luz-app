// /utils/statistics/getMedian.js
export function getMedian(data) {
    console.log('[getMedian] ⏬ Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const sorted = [...data]
      .filter((d) => typeof d.value === 'number')
      .map((d) => d.value)
      .sort((a, b) => a - b);
  
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0
      ? sorted[mid]
      : +( (sorted[mid - 1] + sorted[mid]) / 2 ).toFixed(4);
  
    console.log('[getMedian] ✅ Mediana calculada:', median);
    return median;
  }