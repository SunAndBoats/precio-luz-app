const cron = require('node-cron');
const { fetchEsiosDay } = require('../utils/esios');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function ingestForDate(dateStr) {
  const values = await fetchEsiosDay(dateStr);
  for (const v of values) {
    try {
      await prisma.price.upsert({
        where: { datetime: v.datetime },
        update: { price: v.value, hour: v.hour, zone: 'Península' },
        create: { datetime: v.datetime, price: v.value, hour: v.hour, zone: 'Península' }
      });
    } catch (err) {
      console.error('upsert error', err.message);
    }
  }
}

function startIngestJob() {
  console.log('[ingestJob] scheduling cron job every 2 minutes between 20:00-21:00');

  // Cron: every 2 minutes
  cron.schedule('*/2 20 * * *', async () => {
    try {
      const today = new Date();
      const dateStr = today.toISOString().slice(0,10);
      console.log('[ingestJob] running ingest for', dateStr);
      await ingestForDate(dateStr);
    } catch (err) {
      console.error('[ingestJob] error', err.message);
    }
  });
}

module.exports = { startIngestJob, ingestForDate };
