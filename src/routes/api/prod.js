const { Router } = require('express');
require('dotenv').config();

const router = new Router();

router.route(`/call`).post((req, res) => {
  console.log('Trying to do a prod call');
  res.json('NOT IMPLEMENTED').end();
});

module.exports = router;
