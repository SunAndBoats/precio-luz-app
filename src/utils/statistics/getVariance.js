// /utils/statistics/getVariance.js
export function getVariance(data) {
    console.log('[getVariance] ⏬ Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const values = data.map((d) => d.value);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = +(values.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / values.length).toFixed(4);
  
    console.log('[getVariance] ✅ Varianza:', variance);
    return variance;
  }