// esta funcion convierte las 00.00 en 22:00-23:00 
/*
export function formatUtcHourRange(datetimeStr) {
    const date = new Date(datetimeStr);
    const hour = date.getUTCHours();
    const nextHour = (hour + 1) % 24;
    const format = (h) => h.toString().padStart(2, '0');
    return `${format(hour)}:00-${format(nextHour)}:00`;
  }
    */

  export function formatUtcHourRange(datetimeStr) {
    // datetimeStr ejemplo: "2025-07-04T00:00:00.000+02:00"
    // Extraemos la hora en formato numérico sin tocar nada
    const hour = parseInt(datetimeStr.substr(11, 2), 10);
    const nextHour = (hour + 1) % 24;
  
    // Función para formatear número a dos dígitos
    const format = (h) => h.toString().padStart(2, '0');
  
    return `${format(hour)}:00-${format(nextHour)}:00`;
  }