// src/services/apiClient.js
// Reads backend base URL from Vite env with graceful fallback
const BASE_URL = (import.meta?.env?.VITE_API_URL || '').replace(/\/$/, '') || '';

function getBaseUrl() {
  // If VITE_API_URL not set, fallback to same origin (useful for local proxy)
  return BASE_URL || '';
}

// Adapter: backend -> ESIOS-like shape used by parseZoneData and components
function adaptBackendPricesToEsiosShape(resp) {
  const items = Array.isArray(resp?.data) ? resp.data : [];
  const values = items.map((it) => ({
    // Keep original datetime (UTC Z)
    datetime: it.datetimeUtc,
    // Normalize to expected geo label
    geo_name: 'Península',
    // Backend is €/kWh; parseZoneData expects ESIOS €/MWh and divides by 1000,
    // so we multiply by 1000 here to keep downstream logic unchanged.
    value: (typeof it.priceEurKwh === 'number' ? it.priceEurKwh : Number(it.priceEurKwh)) * 1000,
  }));

  return {
    indicator: {
      values,
      // Backend doesn't expose an updated timestamp; use server date if present or now
      values_updated_at: resp?.date ? `${resp.date}T00:00:00.000Z` : new Date().toISOString(),
    },
  };
}

export async function fetchPricesTodayAdapted() {
  const url = `${getBaseUrl()}/api/prices/today`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API ${url} failed: ${res.status}`);
  const json = await res.json();
  return adaptBackendPricesToEsiosShape(json);
}

export async function fetchPricesByDateAdapted(dateStr) {
  const url = `${getBaseUrl()}/api/prices?date=${encodeURIComponent(dateStr)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API ${url} failed: ${res.status}`);
  const json = await res.json();
  return adaptBackendPricesToEsiosShape(json);
}
