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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
  const [preferences, setPreferences] = useState({ ...venues.preferences });

  useEffect(() => {
    getPreferencesDispatch();
  }, []);

  useEffect(() => {
    setPreferences({ ...venues.preferences });
  }, [venues.preferences]);

  const handleClick = (e, bool) => {
    const { name }= e.target;
    setPreferences({ ...preferences, [name]: bool });
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
      {/* <Typography variant='h5' align='center' mt={ 5 }>How do you like to spend time?</Typography> */}
      <Box sx={{ paddingBottom: '5vh' }}>
        <Box sx={{ width: '100%', paddingBottom: '5vh' }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            sx={{ m: '5%' }}>
            {
              allVenuesList.map((name) =>
                <Grid key={name} item xs={6}>
                  <Card
                    onClick={(e) => handleClick(e, preferences.name ? true : false)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.unsplash.com/photo-1517334266-b25264dbe6f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
                      alt="green iguana"

                    />
                  </Card>
                  {/* <PreferencesCard
                    key={name}
                    handleClick={handleClick}
                    preference={name}
                    preferences={preferences}
                  /> */}
                </Grid>,
              )
            }
          </Grid>
          {/* <Grid sx={{ width: '90vw', height: '30vh', m: '5%' }} cols={2} rowHeight="100%">
            {
              allVenuesList.map((name) =>
                <PreferencesCard
                  key={name}
                  handleClick={handleClick}
                  preference={name}
                  preferences={preferences}
                />,
              )
            }
          </Grid> */}
        </Box>
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              allVenuesList.map((name) =>
                <Grid key={name}item xs={2} sm={4} md={4}>
                  <PreferencesCard
                    key={name}
                    handleClick={handleClick}
                    preference={name}
                    preferences={preferences}
                  />
                </Grid>,
              )
            }
          </Grid>
        </Box> */}
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
    // <Container sx={{ p: 2 }}>
    //   <Typography variant='h5' align='center' mt={ 5 }>How do you like to spend time?</Typography>
    //   <div className='icons-container'>
    //     { allVenuesList.map((name) =>
    //       <PreferencesCard
    //         key={name}
    //         handleClick={handleClick}
    //         preference={name}
    //         preferences={preferences} />) }
    //   </div>
    //   <Button txt="Save"
    //     type="submit"
    //     variant='contained'
    //     color='secondary'
    //     fullWidth = {true}
    //     onClick={handleSubmit}
    //   > Save preferences</Button>
    // </Container>
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

