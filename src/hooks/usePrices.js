import { useState, useEffect } from 'react';
import { parseEsiosData } from '../utils/parseEsiosData';

export function usePrices() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/esios')
      .then((res) => res.json())
      .then((data) => {
        const parsed = parseEsiosData(data);
        setPrices(parsed);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { prices, loading };
}
