// /utils/filterByHourRange.js
export function filterByHourRange(data, startHour = 7, endHour = 21) {
    return data.filter((d) => d.hour >= startHour && d.hour < endHour);
  }