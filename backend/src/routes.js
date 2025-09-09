const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { fetchEsiosDay } = require('./utils/esios');

const prisma = new PrismaClient();

function setupRoutes(app) {
  const router = express.Router();

  router.get('/health', (req, res) => res.json({ status: 'ok' }));

  // Get prices for a date (YYYY-MM-DD)
  router.get('/prices', async (req, res) => {
    const date = req.query.date;
    if (!date) return res.status(400).json({ error: 'date query required YYYY-MM-DD' });

    try {
      const prices = await prisma.price.findMany({ where: { datetime: { startsWith: date } }, orderBy: { datetime: 'asc' } });
      return res.json({ prices });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'db error' });
    }
  });

  // Manual fetch from ESIOS for a given date
  router.post('/fetch', async (req, res) => {
    const date = req.body.date;
    if (!date) return res.status(400).json({ error: 'date required' });

    try {
      const values = await fetchEsiosDay(date);
      return res.json({ values });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'fetch error', details: err.message });
    }
  });

  app.use('/api', router);
}

module.exports = { setupRoutes };
