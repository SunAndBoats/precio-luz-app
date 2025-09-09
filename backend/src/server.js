const express = require('express');
const bodyParser = require('body-parser');
const { setupRoutes } = require('./routes');
const { startIngestJob } = require('./jobs/ingestJob');

const app = express();
app.use(bodyParser.json());

setupRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

// Start background job only when not in test
if (process.env.JEST_WORKER_ID === undefined) {
  startIngestJob();
}

module.exports = app;
