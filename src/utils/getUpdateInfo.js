// /utils/getUpdateInfo.js
export function getUpdateInfo(data) {
    if (!data || !data.updated_at) return null;
  
    const updateDate = new Date(data.updated_at);
    const now = new Date();
  
    const HHMM = `${updateDate.getHours().toString().padStart(2, '0')}${updateDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  
    const isToday =
      updateDate.getDate() === now.getDate() &&
      updateDate.getMonth() === now.getMonth() &&
      updateDate.getFullYear() === now.getFullYear();
  
    return {
      updateTime: HHMM,
      updateDate: updateDate.toISOString().split('T')[0],
      relativeText: isToday ? 'Precios para hoy' : 'Precios para mañana',
    };
  }
  