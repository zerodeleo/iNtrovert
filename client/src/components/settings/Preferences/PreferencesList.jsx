import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { getVenuesList, setPreferences } from '../../../store/actions/venuesActions';

import { allVenuesList } from '../../../utils';

// MUI
import { Box, Button, Card, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PreferencesCard from './PreferencesCard';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

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
  console.log(preferences, 'whatishappening');

  useEffect(() => {
    getPreferencesDispatch();
  }, []);

  useEffect(() => {
    const ls = localStorage.getItem('preferences') ? JSON.parse(localStorage.getItem('preferences')) : null;
    setPreferences(ls ? ls : venues.preferences);
  }, []);

  useEffect(() => {
    setPreferences({ ...venues.preferences });
  }, [venues.preferences]);

  const handleClick = (e) => {
    const { name }= e.target;
    setPreferences(preferences[name] ? { ...preferences, [name]: false } : { ...preferences, [name]: true } );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const typesKeys = [...Object.keys(preferences)];
    const types = typesKeys.filter((t, idx)=> preferences[`${t}`] ? typesKeys[idx] : null);
    setPreferencesDispatch({ uid, preferences });
    getVenuesListDispatch({ types });
  };

  return (
    <Container>
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
        fullWidth = {true}
        sx={{ backgroundColor: '#35463D', mb: 2 }}
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

