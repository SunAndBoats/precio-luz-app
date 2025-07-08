// ✅ /utils/statistics/getMinPriceHour.js
export function getMinPriceHour(data) {
    console.log('[getMinPriceHour] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const min = data.reduce((prev, curr) => (curr.price < prev.price ? curr : prev));
    console.log('[getMinPriceHour] ✅ Hora más barata:', min.hour, 'Precio:', min.price);
    return min;
  }