import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { getVenuesList, setPreferences } from '../../../store/actions/venuesActions';

import { allVenuesList } from '../../../utils';

// MUI
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PreferencesCard from './PreferencesCard';

// Actions
import { getPreferences } from '../../../store/actions/venuesActions';

const PreferencesList = ({
  venues,
  getVenuesListDispatch,
  setPreferencesDispatch,
  uid,
  getPreferencesDispatch,
  togglePref,
}) => {
  const [preferences, setPreferences] = useState(venues.preferences);

  useEffect(() => {
    getPreferencesDispatch();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  console.log('hello ', venues.preferences);

  const handleSubmit = (e) => {
    e.preventDefault();
    const typesKeys = [...Object.keys(preferences)];
    const types = typesKeys.filter((t, idx)=> preferences[`${t}`] ? typesKeys[idx] : null);
    setPreferencesDispatch({ uid, preferences });
    getVenuesListDispatch({ types });
  };

  return (
    <Container sx={{ p: 2 }}>
      <Typography variant='h5' align='center' mt={ 5 }>How do you like to spend time?</Typography>
      <div className='icons-container'>
        { allVenuesList.map((name) =>
          <PreferencesCard
            key={name}
            handleClick={handleClick}
            preference={name}
            preferences={preferences} />) }
      </div>
      <Button txt="Save"
        type="submit"
        variant='contained'
        color='secondary'
        fullWidth = {true}
        onClick={handleSubmit}
      > Save preferences</Button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    venues: state.venues,
    uid: state.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getVenuesListDispatch: ({ types }) => dispatch(getVenuesList({ types })),
  setPreferencesDispatch: ({ uid, preferences }) => dispatch(setPreferences({ uid, preferences })),
  getPreferencesDispatch: () => dispatch(getPreferences()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesList);

