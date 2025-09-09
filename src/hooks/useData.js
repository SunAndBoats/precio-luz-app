// /hooks/useData.js
import { useEffect, useState } from 'react';
import { fetchPricesTodayAdapted } from '../services/apiClient';

// Hook que obtiene datos desde tu backend y los adapta al shape esperado por el front actual
export function useData() {
  const [data, setData] = useState(null);
  const [values, setValues] = useState([]);
  const [updatedAt, setUpdatedAt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const adapted = await fetchPricesTodayAdapted();
        if (!alive) return;
        setData(adapted);
        setValues(adapted?.indicator?.values || []);
        setUpdatedAt(adapted?.indicator?.values_updated_at || '');
      } catch (err) {
        console.error('[useData] ❌ Error:', err);
        if (!alive) return;
        setError(err.message || 'Error desconocido');
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, []);

  return { data, values, updatedAt, loading, error };
}
