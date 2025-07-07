// /utils/statistics/getAverage.js
export function getAverage(data) {
  console.log('[getAverage] ⏬ Entrada:', Array.isArray(data), data.length);
  if (!Array.isArray(data) || data.length === 0) return null;

  const sum = data.reduce((acc, curr) => acc + (curr.value || 0), 0);
  const avg = +(sum / data.length).toFixed(4);
  console.log('[getAverage] ✅ Promedio calculado:', avg);

  return avg;
}
