/* eslint-disable camelcase */
const { Router } = require('express');
require('dotenv').config();

const axios = require('axios');

const router = new Router();

const fakeGoogleApiPath = 'http://localhost:5001';
const fakeBestTimeApiPath = 'http://localhost:5002';

router.route(`/bars`).get(async (req, res) => {
  await axios.get(`${fakeGoogleApiPath}/barsData`)
      .then((googleRes) => {
        const besttimeRes = axios.get(`${fakeBestTimeApiPath}/barsData`);
        const bars = googleRes.data.results.map((result) => {
          const { name, rating, place_id, vicinity } = result;
          return { name, rating, place_id, vicinity };
        });
        return { besttimeRes, bars };
      })
      .then((obj) => {
        obj.besttimeRes
            .then((data) => data.data)
            .then((data) => {
              const resObj = obj.bars.map((el) => {
                const venue = data.find((el2) => {
                  return el2.venue_info.venue_name === el.name;
                });
                return {
                  ...el,
                  busyness: venue.analysis.venue_forecasted_busyness,
                };
              });
              return resObj;
            })
            .then((res) => console.log(res));
      })
      .then(() => res.end());
});

module.exports = router;
