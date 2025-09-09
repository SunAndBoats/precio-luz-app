// /api/getData.js

// Deprecated: kept for compatibility, but prefer using src/services/apiClient from the frontend.
export default async function handler(req, res) {
  return res.status(410).json({ error: 'Deprecated endpoint. Frontend should use VITE_API_URL backend directly.' });
}