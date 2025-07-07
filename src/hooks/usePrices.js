import { useState, useEffect } from 'react';

export function usePrices() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('[usePrices] 🔄 Fetch iniciado a /api/getPrices');

    fetch('/api/getPrices')
      .then((res) => {
        console.log(`[usePrices] ✅ Respuesta recibida - status: ${res.status}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!data?.indicator?.values) {
          console.warn('[usePrices] ⚠️ No se encontró data.indicator.values', data);
        }

        const extracted = data.indicator?.values || [];
        console.log(`[usePrices] 📊 values extraídos (${extracted.length})`);
        console.table(extracted.slice(0, 5)); // muestra los primeros 5

        setValues(extracted);
        setLoading(false);
      })
      .catch((err) => {
        console.error('[usePrices] ❌ Error en fetch:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { values, loading, error };
}
