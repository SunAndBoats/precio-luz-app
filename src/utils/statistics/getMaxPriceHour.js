// ✅ /utils/statistics/getMaxPriceHour.js
export function getMaxPriceHour(data) {
    console.log('[getMaxPriceHour] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const max = data.reduce((prev, curr) => (curr.price > prev.price ? curr : prev));
    console.log('[getMaxPriceHour] ✅ Hora más cara:', max.hour, 'Precio:', max.price);
    return max;
  }