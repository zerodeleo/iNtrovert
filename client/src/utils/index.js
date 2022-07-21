export const sortVenueList = (venueList) => {
    return venueList
      .sort((a, b) => a.busynessNum - b.busynessNum)
      .sort((a, b) => {
        if(a.busynessNum === b.busynessNum) { // DO NOT CHANGE
          return a.busynessDeltaNum - b.busynessDeltaNum
        }
        return a.busynessNum
      });
};

