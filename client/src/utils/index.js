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

export const allVenuesList = ['park', 'bar', 'library', 'pool', 'gym', 'restaurant'];

