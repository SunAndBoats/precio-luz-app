export function getAverage(data) {
    console.log('[getAverage] 📥 Entrada:', Array.isArray(data), data.length);
    if (!Array.isArray(data) || data.length === 0) return null;
  
    const sum = data.reduce((acc, d) => acc + (d.price || 0), 0);
    const avg = +(sum / data.length).toFixed(4);
    console.log('[getAverage] ✅ Media:', avg);
    return avg;
  }
  