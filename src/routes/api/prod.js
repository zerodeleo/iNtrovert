const { Router } = require('express');

require('dotenv').config();

const router = new Router();

router.route(`/parks/`).get(async (req, res) => {
  console.error('Real time fetching not implemented');
  res.json('Real time fetching not implemented').end();
});

router.route(`/parks/:id`).get(async (req, res) => {
  console.error('Real time fetching not implemented');
  res.json('Real time fetching not implemented').end();
});

module.exports = router;
