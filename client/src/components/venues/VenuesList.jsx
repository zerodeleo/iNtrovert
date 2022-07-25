import React, { useEffect } from 'react';
import VenueCard from './VenueCard';
import { connect } from 'react-redux';

// Actions
import { getVenuesList } from '../../store/actions/venuesActions';

// MUI
import List from '@mui/material/List';

const VenuesList = ({ venues: { venuesList }, getVenuesListDispatch }) => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div>
      <List
        sx={{
          'width': '100%',
          'maxWidth': width,
          'bgcolor': 'background.paper',
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
              {venuesList.map((venue) => (
                <VenueCard
                  key={venue.id}
                  id={venue.place_id}
                  venue={venue}
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
  console.log(state.venues);
  return {
    venues: state.venues,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getVenuesListDispatch: ({ types }) => dispatch(getVenuesList({ types })),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenuesList);
