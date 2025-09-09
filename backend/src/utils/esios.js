const fetch = require('node-fetch');

const ESIOS_ENDPOINT = 'https://api.esios.ree.es/indicators/1001';

async function fetchEsiosDay(date) {
  // date expected YYYY-MM-DD; ESIOS API doesn't take date in this indicator endpoint
  const token = process.env.ESIOS_TOKEN;
  if (!token) throw new Error('ESIOS_TOKEN not set');

  const res = await fetch(ESIOS_ENDPOINT, {
    headers: { Accept: 'application/json', 'x-api-key': token }
  });

  if (!res.ok) throw new Error('esios fetch failed ' + res.status);
  const data = await res.json();

  // filter for peninsula
  const vals = (data.indicator?.values || []).filter(v => v.geo_name === 'Península' && typeof v.value === 'number');

  // convert to simple shape
  return vals.map(v => ({ datetime: v.datetime, value: v.value / 1000, hour: parseInt(v.datetime.slice(11,13),10) }));
}

module.exports = { fetchEsiosDay };
