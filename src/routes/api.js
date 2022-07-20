const { Router } = require('express');
require('dotenv').config();

const router = new Router();

const apiKey = process.env.API_KEY_PRIVATE;

router.route(`/`).get((req, res) => {
  const params = new URLSearchParams({
    apiKey,
    'venue_name': 'McDonalds',
    'venue_address': 'Ocean Ave, San Fransisco',
  });

  fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
    method: 'POST',
  }).then(function(data) {
    console.log(data);
    res.json(data).end();
  });
  // fetch(`https://besttime.app/api/v1/keys/${process.env.API_KEY_PRIVATE}`)
  //   .then(data => res.json(data).end())
  //   .catch(err => console.error(err));
});

module.exports = router;
