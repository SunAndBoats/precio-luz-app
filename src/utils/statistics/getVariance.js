export function getVariance(data) {
    console.log('[getVariance] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const mean = data.reduce((acc, d) => acc + d.price, 0) / data.length;
    const variance = +(data.reduce((acc, d) => acc + Math.pow(d.price - mean, 2), 0) / data.length).toFixed(4);
  
    console.log('[getVariance] ✅ Varianza:', variance);
    return variance;
  }
  