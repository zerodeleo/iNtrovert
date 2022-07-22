/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { Router } = require('express');
require('dotenv').config();

const axios = require('axios');
const { getGoogleVenues } = require('./utils');
const router = new Router();

const fakeGoogleApiPath = 'http://localhost:5001';
const fakeBestTimeApiPath = 'http://localhost:5002';


router.route(`/call`).get(async (req, res) => {
  const { type, location } = req.body;

  const types = ['parks', 'bars'];

  await axios.get(`${fakeGoogleApiPath}/data`)
      .then((res) => {
        const googleVenues = getGoogleVenues({ types, res });
      });
});

router.route(`/call`).post(async (req, res) => {
  const { type, location } = req.body;

  await axios.get(`${fakeGoogleApiPath}/${type}sData`)
      .then((googleRes) => {
        const besttimeRes = axios.get(`${fakeBestTimeApiPath}/${type}sData`);
        const bars = googleRes.data.results.map((result) => {
          const { name, rating, place_id, vicinity } = result;
          return { name, rating, place_id, vicinity };
        });
        return { besttimeRes, bars };
      })
      .then(async (obj) => {
        return obj.besttimeRes
            .then((data) => data.data)
            .then((data) => {
              const resObj = obj.bars.map((el) => {
                const venue = data.find((el2) => {
                  return el2.venue_info.venue_name === el.name;
                });
                return {
                  ...el,
                  busynessDelta:
                    venue.analysis.venue_live_forecasted_delta > 0 ?
                    true :
                    typeof
                    venue.analysis.venue_live_forecasted_delta === 'undefined' ?
                    undefined :
                    false,
                  busynessDeltaNum: venue.analysis.venue_live_forecasted_delta,
                  busynessDeltaTxt: venue.analysis.venue_live_forecasted_delta === true ? 'People are expecting to leave' : 'People are expecting to arrive',
                  busynessTxt:
                    busynessTxt(venue.analysis.venue_forecasted_busyness),
                  busynessNum: venue.analysis.venue_forecasted_busyness,
                  createdAt: new Date().getTime(),
                  id: Math.floor(Math.random() * 10000000000),
                  type,
                };
              });
              return resObj;
            })
            .then((data) => data)
            .catch((err) => res.status(500).json(err));
      })
      .then((data) => res.json(data).end())
      .catch((err) => res.status(500).json(err));
});

module.exports = router;
