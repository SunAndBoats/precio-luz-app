// /utils/statistics/getAverage.js
export function getAverage(data) {
    if (data.length === 0) return null;
    const sum = data.reduce((acc, curr) => acc + curr.price, 0);
    return +(sum / data.length).toFixed(4);
  }