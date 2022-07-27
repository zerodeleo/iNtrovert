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
      <Box sx={{ paddingBottom: '5vh' }}>
        <Box sx={{ width: '100%', paddingBottom: '5vh' }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            sx={{ m: '5%' }}>
            {
              allVenuesList.map((name) =>{
                return (<Grid key={name} item xs={6}>
                  <Card
                    onClick={handleClick}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.unsplash.com/photo-1517334266-b25264dbe6f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
                      alt="green iguana"
                      name={name}
                    />
                  </Card>
                </Grid>);
              })
            }
          </Grid>
        </Box>
        <Box>
          <Button txt="Save"
            type="submit"
            variant='contained'
            color='secondary'
            fullWidth = {true}
            onClick={handleSubmit}
          > Save preferences</Button>
        </Box>
      </Box>
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

