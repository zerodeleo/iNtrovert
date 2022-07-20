const { Router } = require('express');
require('dotenv').config();

const router = new Router();

router.route(`/parks`).get((req, res) => {
  res.json('PROD Not implemented').end();
});

module.exports = router;
