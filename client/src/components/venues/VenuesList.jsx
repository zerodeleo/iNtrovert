import React, { useEffect, useState } from 'react';
import VenueCard from './VenueCard';
import { connect } from 'react-redux';

// Actions
import { getVenuesList } from '../../store/actions/venuesActions';
import { setFavourites, getFavourites } from '../../store/actions/favouritesActions';

// MUI
import List from '@mui/material/List';

const VenuesList = ({
  venues: { venuesList, preferences },
  getVenuesListDispatch,
  favourites: { favourites },
  setFavouritesDispatch,
  getFavouritesDispatch,
}) => {
  const { innerWidth: width, innerHeight: height } = window;
  const [favouritesList, setFavouritesList] = useState(favourites);

  useEffect(() => {
    const typesKeys = [...Object.keys(preferences)];
    const types = typesKeys.filter((t, idx) => preferences[`${t}`] ? typesKeys[idx] : null);
    getVenuesListDispatch({ types });
  }, []);

  useEffect(() => {
    getFavouritesDispatch();
  }, []);

  useEffect(() => {
    setFavouritesList(favourites);
  }, [favourites]);

  const handleHeartClick = ({ e, id }) => {
    e.stopPropagation();
    if (!favouritesList.includes(id)) {
      const newFavouritesList = [...favouritesList, id];
      setFavouritesDispatch({ favourites: newFavouritesList });
      return;
    } else {
      const newFavouritesList = favouritesList.filter((idx) => idx !== id);
      setFavouritesDispatch({ favourites: newFavouritesList });
      return;
    }
  };

  return (
    // <div>
    <List
      sx={{
        'width': '100%',
        'maxWidth': width,
        'minHeight': '50%',
        'bgcolor': 'transparent',
        'position': 'relative',
        'overflow': 'auto',
        '& ul': { padding: 0 },
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
      }}
    >
      { venuesList.length > 0 ? [0].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul className='ul-container'>
            {venuesList.map((venue, idx) => (
              <VenueCard
                key={venue.id}
                id={venue.place_id}
                idx={idx}
                venue={venue}
                handleHeartClick={handleHeartClick}
                isFavourite={favouritesList.includes(venue.place_id)}
              />
            ))}
          </ul>
        </li>
      )) : <li sx={{ display: 'flex', color: 'red' }}>Select your preferences below</li> }
    </List>
    // </div>
  );
};

const mapStateToProps = (state) => {
  return {
    venues: state.venues,
    favourites: state.favourites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFavouritesDispatch: () => dispatch(getFavourites()),
  getVenuesListDispatch: ({ types }) => dispatch(getVenuesList({ types })),
  setFavouritesDispatch: ({ favourites }) => dispatch(setFavourites({ favourites })),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenuesList);
