// /utils/getMinMaxPrice.js
export function getMinMaxPrice(data) {
    if (!Array.isArray(data) || data.length === 0) return null;
  
    let min = data[0];
    let max = data[0];
  
    for (const d of data) {
      if (d.value < min.value) min = d;
      if (d.value > max.value) max = d;
    }
  
    return {
      min: {
        price: +(min.value / 1000).toFixed(4),
        time: new Date(min.datetime_utc).toISOString().slice(11, 16),
      },
      max: {
        price: +(max.value / 1000).toFixed(4),
        time: new Date(max.datetime_utc).toISOString().slice(11, 16),
      },
    };
  }
  