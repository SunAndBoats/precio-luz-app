// /api/getPrices.js
export default async function handler(req, res) {
  const token = process.env.ESIOS_TOKEN;
  const endpoint = 'https://api.esios.ree.es/indicators/1001';

  console.log('[getPrices] token:', token);

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': token,
      },
    });

    console.log('[getPrices] response.ok:', response.ok);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error en fetch' });
    }

    const data = await response.json();
    console.log('[getPrices] data.indicator.values length:', data.indicator?.values?.length);

    return res.status(200).json(data);
  } catch (error) {
    console.error('[getPrices] ERROR:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
/*

import { useEffect, useState } from 'react';

export function usePrices() {
  const [data, setData] = useState(null); // en vez de solo values
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/getPrices')
      .then((res) => res.json())
      .then((json) => {
        console.log('[usePrices] ✅ Datos completos:', json.indicator);
        setData(json.indicator); // guarda el objeto completo
        setLoading(false);
      })
      .catch((err) => {
        console.error('[usePrices] ❌ Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return {
    values: data?.values || [],
    metadata: data || null,
    loading,
    error,
  };
}
*/