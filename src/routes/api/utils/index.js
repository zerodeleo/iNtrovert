require('dotenv').config();

const busynessTxtFunc = (busynessNum) => {
  if (!busynessNum && busynessNum !== 0) return 'no data';
  const busynessTxts = [
    {
      range: [0, 10],
      txt: 'very very very low',
    },
    {
      range: [11, 20],
      txt: 'very very low',
    },
    {
      range: [21, 30],
      txt: 'very low',
    },
    {
      range: [31, 40],
      txt: 'low',
    },
    {
      range: [41, 50],
      txt: 'below average',
    },
    {
      range: [51, 60],
      txt: 'average',
    },
    {
      range: [61, 70],
      txt: 'above average',
    },
    {
      range: [71, 80],
      txt: 'very above average',
    },
    {
      range: [81, 90],
      txt: 'very very above average',
    },
    {
      range: [91, 100],
      txt: 'very very very above average',
    },
  ];
  for ( let i = 0; i < busynessTxts.length; i++ ) {
    if (
      busynessNum >= busynessTxts[i].range[0] &&
      busynessNum <= busynessTxts[i].range[1]) {
      return busynessTxts[i].txt;
    }
  }
  return 'util function failed';
};

const mergeNestedArr = (arr) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i]) {
      resultArr = [...resultArr, ...arr[i]];
    }
  };
  return resultArr;
};

const getGoogleVenues = ({ types, res }) => {
  const typesArr = res.data.map((typeArr) => {
    if (types.find((type) => type === typeArr.type)) {
      return typeArr.results;
    }
  });
  return mergeNestedArr(typesArr);
};

const getBestTimeURLSearchParams = (googleVenues) => {
  const venuesNames = googleVenues.map((obj) => obj.name);
  const venuesAddresses = googleVenues.map((obj) => obj.vicinity);
  const params = new URLSearchParams({
    'api_key_private': process.env.BESTTIME_API_KEY,
    'venue_names': venuesNames,
    'venue_addresses': venuesAddresses,
  });
  return params;
};

const getBestTimeURLSearchParamsFake = (googleVenues) => {
  return googleVenues.map((obj) => {
    return new URLSearchParams({
      'venue_name': obj.name,
      'venue_addresses': obj.vicinity,
    });
  });
};

const getBestTimeURLSearchParamsFakeOne = (googleVenues) => {
  const newArr = [];
  newArr.push(
      new URLSearchParams({
        'venue_name': 'Honey Honey',
        'venue_addresses': 'Folkungagatan 59, Stockholm',
      }),
  );
  return newArr;
};

const combineGoogleAndBesttime = ({ googleVenues, besttimeVenues }) => {
  return googleVenues.map((googleVenue) => {
    const besttimeVenue = besttimeVenues.find((besttimeElement) =>
      besttimeElement.venue_info.venue_name === googleVenue.name,
    );
    const busynessTxt = busynessTxtFunc(
        besttimeVenue.analysis.venue_forecasted_busyness,
    );

    const busynessDeltaTxt = () => {
      if (besttimeVenue.analysis.venue_live_forecasted_delta) {
        return 'People are expecting to leave';
      }
      return 'People are expecting to arrive';
    };

    return {
      name: googleVenue.name,
      place_id: googleVenue.place_id,
      rating: googleVenue.rating,
      vicinity: googleVenue.vicinity,
      busynessNum: besttimeVenue.analysis.venue_forecasted_busyness,
      busynessTxt,
      busynessDelta: besttimeVenue.analysis.venue_live_forecasted_delta,
      busynessDeltaTxt: busynessDeltaTxt(),
      busynessDeltaNum: besttimeVenue.analysis.venue_live_forecasted_delta,
      createdAt: new Date().getTime(),
      id: Math.floor(Math.random() * 10000000000),
      type: googleVenue.type,
    };
  });
};

module.exports = {
  busynessTxtFunc,
  getGoogleVenues,
  getBestTimeURLSearchParams,
  getBestTimeURLSearchParamsFake,
  getBestTimeURLSearchParamsFakeOne,
  combineGoogleAndBesttime,
  mergeNestedArr,
};
