// /utils/parseZoneData.js
export function parseZoneData(values, geoName = 'Península') {
    return values
      .filter((v) => v.geo_name === geoName)
      .map((v) => ({
        price: +(v.value / 1000).toFixed(4),
        hour: new Date(v.datetime_utc).getUTCHours(),
        datetime: v.datetime_utc,
      }));
  }