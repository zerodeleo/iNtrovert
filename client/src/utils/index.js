export const sortVenueList = (venueList) => {
  return venueList
      .sort((a, b) => a.busynessNum - b.busynessNum)
      .sort((a, b) => {
        if (a.busynessNum === b.busynessNum) {
          return a.busynessDeltaNum - b.busynessDeltaNum;
        }
        return a.busynessNum;
      });
};


/**
 * Calculates distance between position in localstorage and current position of user
 *
 * @param {object} location with lon and lat key/value pairs
 * @return {boolean} true if you have to reset users position in localstorage
 */
export const calculateDistanceBetweenLocations = ({ lat, lon }) => {
  const lsLocation = JSON.parse(localStorage.getItem('location'));

  if (!lsLocation) return true;

  const lat1 = lsLocation.lat;
  const lon1 = lsLocation.lon;

  const lat2 = lat;
  const lon2 = lon;

  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres

  console.log('You have moved ', d, ' meters');

  if (d > 1000) {
    return true;
  } else {
    return false;
  }
};
