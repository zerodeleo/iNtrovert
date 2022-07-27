import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// components
import Btn from '../layout/Btn';
import VenueCard from '../venues/VenueCard';

// MUI
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

// Actions
import { setFavourites, getFavourites } from '../../store/actions/favouritesActions';
import { Typography } from '@mui/material';

const FavouritesList = ({
  fav,
  toggleFavourites,
  venues,
  favourites: { favourites },
  setFavouritesDispatch,
  getFavouritesDispatch }) => {
  const [favouritesList, setFavouritesList] = useState(favourites);

  const venuesList = venues.venuesList.filter((venue) => {
    if (favourites.includes(venue.place_id)) {
      return venue;
    }
  });

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

  const favContainer = () =>
    (
      <div>
        { favourites.length === 0 ? <Typography variant="h6" align="center" pt="10%">You have no favourites yet!</Typography> : null }
        { venuesList ? [0].map((sectionId) => (
          <li key={`section-${sectionId}`} style={{ listStyle: 'none' }}>
            <ul className='ul-container'>
              {venuesList.map((venue, idx) => (
                <VenueCard
                  key={venue.id}
                  id={venue.place_id}
                  idx={idx}
                  venue={venue}
                  handleHeartClick={handleHeartClick}
                  isFavourite={true}
                />
              ))}
            </ul>
          </li>
        )) : null }
        <Box sx={{ display: 'flex', flexDirection: 'column', p: '0 10% 10% 10%' }}>
          <Btn
            onClick={toggleFavourites(false)}
            txt="BACK"
            variant="contained"
            sx={{ backgroundColor: '#35463D',
              borderRadius: '12px',
              color: '#CBCDCB',
              fontFamily: 'Red Hat Display',
              fontWeight: '500',
              letterSpacing: '2px' }}
          />
        </Box>
      </div>
    );
  return (
    <section className="favs pd">
      <Drawer
        open={fav} // favs
        onClose={toggleFavourites(false)}
        anchor='bottom'
      >
        {favContainer(fav)}
      </Drawer>
    </section>
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
  setFavouritesDispatch: ({ favourites }) => dispatch(setFavourites({ favourites })),
});


export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
