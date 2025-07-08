// ✅ /utils/getUpdatedDate.js
export function getUpdatedDate(data) {
    console.log('[getUpdatedDate] 📥 Entrada:', data);
    if (!data || typeof data !== 'object' || !data.indicator?.values_updated_at) return null;
  
    const updated = data.indicator.values_updated_at;
    console.log('[getUpdatedDate] ✅ Fecha de actualización:', updated);
    return updated;
  }