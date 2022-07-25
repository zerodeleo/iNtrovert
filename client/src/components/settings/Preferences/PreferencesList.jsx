import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions
import { getVenuesList } from '../../../store/actions/venuesActions';

import { allVenuesList } from '../../../utils';

// MUI
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PreferencesCard from './PreferencesCard';

const PreferencesList = ({ venues, getVenuesListDispatch }) => {
  const [preferences, setPreferences] = useState({ ...venues.preferences });

  const navigate = useNavigate();

  const handleClick = (e) => {
    const { name, checked }= e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typesKeys = [...Object.keys(preferences)];
    const types = typesKeys.filter((t, idx)=> preferences[`${t}`] ? typesKeys[idx] : null);
    getVenuesListDispatch({ types });
    navigate('/');
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  getVenuesListDispatch: ({ types }) => dispatch(getVenuesList({ types })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesList);

