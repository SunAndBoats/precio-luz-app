export function getMedian(data) {
    console.log('[getMedian] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const sorted = [...data].sort((a, b) => a.price - b.price);
    const mid = Math.floor(sorted.length / 2);
  
    const median = sorted.length % 2 === 0
      ? +(((sorted[mid - 1].price + sorted[mid].price) / 2).toFixed(4))
      : +(sorted[mid].price.toFixed(4));
  
    console.log('[getMedian] ✅ Mediana:', median);
    return median;
  }
  