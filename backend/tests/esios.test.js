const { fetchEsiosDay } = require('../src/utils/esios');

describe('esios util', () => {
  test('throws without token', async () => {
    const orig = process.env.ESIOS_TOKEN;
    delete process.env.ESIOS_TOKEN;
    await expect(fetchEsiosDay('2025-01-01')).rejects.toThrow(/ESIOS_TOKEN/);
    process.env.ESIOS_TOKEN = orig;
  });
});
