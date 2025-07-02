export function parseEsiosData(apiData) {
  const values = apiData.indicator?.values || [];
  return values.map((entry) => {
    const date = new Date(entry.datetime);
    return {
      hour: `${date.getHours()}:00`,
      value: entry.value / 1000, // €/MWh → €/kWh
    };
  });
}
