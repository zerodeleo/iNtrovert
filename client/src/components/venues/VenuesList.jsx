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
    <div>
      <List
        sx={{
          'width': '100%',
          'maxWidth': width,
          'bgcolor': 'transparent',
          'position': 'relative',
          'overflow': 'auto',
          'maxHeight': height,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        { venuesList ? [0].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul className='ul-container'>
              {/* <ListSubheader >{`Venue list`}</ListSubheader> */}
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
        )) : null }
      </List>
    </div>
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
