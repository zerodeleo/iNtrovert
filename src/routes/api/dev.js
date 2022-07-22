/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { Router } = require('express');
require('dotenv').config();

const axios = require('axios');
const { getGoogleVenues, getBestTimeURLSearchParamsFake, getBestTimeURLSearchParamsFakeOne, combineGoogleAndBesttime, mergeNestedArr } = require('./utils');
const router = new Router();

const fakeGoogleApiPath = 'http://localhost:5001';
const fakeBestTimeApiPath = 'http://localhost:5002';


router.route(`/call`).get(async (req, res) => {
  const { type, location } = req.body;

  const types = ['parks', 'bars'];

  await axios.get(`${fakeGoogleApiPath}/data`)
      .then((res) => getGoogleVenues({ types, res }))
      .then((googleVenues) => ({
        googleVenues,
        URLSearchParams: getBestTimeURLSearchParamsFake(googleVenues),
      }))
      .then(({ googleVenues, URLSearchParams }) => {
        const promises = URLSearchParams.map((params) =>
          axios.get(`${fakeBestTimeApiPath}/data?venue_info.${params}`)
              .catch((err) => console.error(err)),
        );
        return { googleVenues, promises };
      })
      .then(async ({ googleVenues, promises }) => {
        const resolvedPromises = await Promise.all(promises);
        return { googleVenues, resolvedPromises };
      })
      .then(({ googleVenues, resolvedPromises }) => {
        const besttimeVenues = resolvedPromises.map((obj) => obj.data);
        return { googleVenues, besttimeVenues: mergeNestedArr(besttimeVenues) };
      })
      .then(({ googleVenues, besttimeVenues }) => {
        return combineGoogleAndBesttime({ googleVenues, besttimeVenues });
      })
      .then((data) => res.json(data).end());
});

module.exports = router;
