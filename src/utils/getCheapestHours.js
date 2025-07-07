// /utils/getCheapestHours.js
export function getCheapestHours(data, range = 2) {
    if (!Array.isArray(data)) return null;
  
    const daytime = data.filter((d) => {
      const hour = new Date(d.datetime_utc).getUTCHours();
      return hour >= 7 && hour < 21;
    });
  
    let bestStartIndex = 0;
    let bestSum = Infinity;
  
    for (let i = 0; i <= daytime.length - range; i++) {
      const group = daytime.slice(i, i + range);
      const sum = group.reduce((acc, curr) => acc + curr.value, 0);
  
      if (sum < bestSum) {
        bestSum = sum;
        bestStartIndex = i;
      }
    }
  
    const bestHours = daytime.slice(bestStartIndex, bestStartIndex + range);
    return bestHours.map((h) =>
      new Date(h.datetime_utc).toISOString().slice(11, 16)
    );
  }
  