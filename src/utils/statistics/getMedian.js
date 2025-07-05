// /utils/statistics/getMedian.js
export function getMedian(data) {
  if (data.length === 0) return null;
  const sorted = [...data.map((d) => d.price)].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? +(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(4))
    : +(sorted[mid].toFixed(4));
}