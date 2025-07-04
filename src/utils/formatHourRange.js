/*export function formatUtcHourRange(datetimeStr) {
    const date = new Date(datetimeStr);
    const hour = date.getUTCHours();
    const nextHour = (hour + 1) % 24;
    const format = (h) => h.toString().padStart(2, '0');
    return `${format(hour)}:00-${format(nextHour)}:00`;
  }

*/
export function formatHourRange(datetime) {
    const date = new Date(datetime);
    const start = date.getHours();
    const end = (start + 1) % 24;
    const format = (h) => h.toString().padStart(2, '0');
    return `${format(start)}:00-${format(end)}:00`;
  }
  