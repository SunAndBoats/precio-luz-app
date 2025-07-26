// /mock/mockData.js

export const mockData = {
    indicator: {
      values_updated_at: "2025-07-25T09:00:00.000Z",
      values: Array.from({ length: 24 }, (_, i) => ({
        geo_name: 'Península',
        value: Math.random() * 150 + 20, // entre 20-170
        datetime: `2025-07-25T${String(i).padStart(2, '0')}:00:00.000Z`
      }))
    }
  };
  