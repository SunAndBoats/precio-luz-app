// /utils/parseZoneData.js


export function parseZoneData(values, geoName = 'Península') {
  if (!Array.isArray(values)) {
    console.error('parseZoneData: values no es array', values);
    return [];
  }
  return values
    .filter((v) => v.geo_name === geoName && typeof v.value === 'number')
    .map(/* resto igual */);
}




