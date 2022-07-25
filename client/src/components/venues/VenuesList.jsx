import React, { useEffect } from 'react';
import VenueCard from './VenueCard';
import { connect } from 'react-redux';

// Actions
import apiCall from '../../store/actions/apiActions';

// MUI
import List from '@mui/material/List';

const VenuesList = ({ api: { venueList }, apiCallDispatch }) => {
  useEffect(() => {
    apiCallDispatch({ location: 'bla', type: ['park', 'bar'] });
  }, []);

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
        { venueList ? [0].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul className='ul-container'>
              {/* <ListSubheader >{`Venue list`}</ListSubheader> */}
              {venueList.map((venue) => (
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
  console.log(state);
  return {
    api: state.api,
  };
};

const mapDispatchToProps = (dispatch) => ({
  apiCallDispatch: ({ location, type }) => dispatch(apiCall.apiCall({ location, type })),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenuesList);
