export function getStdDev(data) {
    console.log('[getStdDev] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const mean = data.reduce((acc, d) => acc + d.price, 0) / data.length;
    const variance = data.reduce((acc, d) => acc + Math.pow(d.price - mean, 2), 0) / data.length;
    const stdDev = +Math.sqrt(variance).toFixed(4);
  
    console.log('[getStdDev] ✅ Desviación típica:', stdDev);
    return stdDev;
  }
  