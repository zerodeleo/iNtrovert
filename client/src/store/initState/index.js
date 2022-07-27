export const authInitState = {
  uid: null,
  username: '',
  authError: null,
};


export const venuesInitState = {
  venuesList: [],
  preferences: { park: false, bar: false, gym: false, restaurant: false, library: false, pool: false },
  venuesError: null,
};

export const favouritesInitState = {
  favourites: [],
  favouritesError: null,
};
