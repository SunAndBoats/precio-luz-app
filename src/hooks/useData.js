// /hooks/useData.js
import { useEffect, useState } from 'react';

// Hook personalizado para obtener datos desde /api/getData
export function useData() {
  const [data, setData] = useState(null); // ✅ NUEVO: guardamos toda la respuesta original
  const [values, setValues] = useState([]);
  const [updatedAt, setUpdatedAt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('[useData] 🚀 Fetch iniciando...');
    fetch('/api/getData')
      .then(res => res.json())
      .then(data => {
        console.log('[useData] 📦 Datos recibidos:', data);

        setData(data); // ✅ NUEVO: guardamos la respuesta entera
        setValues(data?.indicator?.values || []);
        setUpdatedAt(data?.indicator?.values_updated_at || '');
        setLoading(false);
      })
      .catch(err => {
        console.error('[useData] ❌ Error:', err);
        setError(err.message || 'Error desconocido');
        setLoading(false);
      });
  }, []);

  // ✅ NUEVO: devolvemos también `data` para poder acceder a otros campos
  return { data, values, updatedAt, loading, error };
}
