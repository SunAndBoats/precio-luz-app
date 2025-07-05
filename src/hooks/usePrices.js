import { useState, useEffect } from 'react';

export function usePrices() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/getPrices')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener precios');
        return res.json();
      })
      .then(data => {
        setValues(data.indicator?.values || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { values, loading, error };
}
