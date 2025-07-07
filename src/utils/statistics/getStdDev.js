// /utils/statistics/getStdDev.js
export function getStdDev(data) {
    console.log('[getStdDev] ⏬ Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const values = data.map((d) => d.value);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / values.length;
    const stdDev = +Math.sqrt(variance).toFixed(4);
  
    console.log('[getStdDev] ✅ Desviación típica:', stdDev);
    return stdDev;
  }