/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { Router } = require('express');
require('dotenv').config();

const axios = require('axios');
const { getGoogleVenues, getBestTimeURLSearchParamsFake, getBestTimeURLSearchParamsFakeOne, combineGoogleAndBesttime, mergeNestedArr } = require('./utils');
const router = new Router();


const fakeGoogleApiPath = 'https://fakegoogleapi.herokuapp.com';
const fakeBestTimeApiPath = 'https://fakebesttimeapi.herokuapp.com';
const fakeGoogleApiPath = process.env.MODE === 'development' ? 'http://localhost:5001' : 'https://fakegoogleapi.herokuapp.com';
const fakeBestTimeApiPath = process.env.MODE === 'development' ? 'http://localhost:5002' : 'https://fakebesttimeapi.herokuapp.com';


router.route(`/venues`).post(async (req, res) => {
  const { types } = req.body;

  if (types.length !== 0) {
    let query = `type=${types[0]}`;
    types.forEach((type, idx) => idx === 0 ? null : query += `&type=${type}`);
    await axios.get(`${fakeGoogleApiPath}/data?${query}`)
        .then((res) => res.data.map((data) => data.results))
        .then((arr) => mergeNestedArr(arr, types))
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
          return combineGoogleAndBesttime({ googleVenues, besttimeVenues, types });
        })
        .then((data) => res.json(data).end());
  } else {
    res.json([]).end();
  }
});

module.exports = router;
