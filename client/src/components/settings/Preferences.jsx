import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { green, pink } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const icon = (bool, name) => {
  switch (name) {
    case 'bar':
      return bool ? <LocalBarIcon sx={{ fontSize: 58, color: green[600] }}/> : <LocalBarIcon sx={{ fontSize: 58 }}/>;
    case 'park':
      return bool ? <ForestIcon sx={{ fontSize: 58, color: green[600] }}/> : <ForestIcon sx={{ fontSize: 58 }}/>;
    case 'restaurant':
      return bool ? <RestaurantIcon sx={{ fontSize: 58, color: green[600] }}/> : <RestaurantIcon sx={{ fontSize: 58 }}/>;
    case 'library':
      return bool ? <LocalLibraryIcon sx={{ fontSize: 58, color: green[600] }}/> : <LocalLibraryIcon sx={{ fontSize: 58 }}/>;
    case 'pool':
      return bool ? <PoolIcon sx={{ fontSize: 58, color: green[600] }}/> : <PoolIcon sx={{ fontSize: 58 }}/>;
    case 'gym':
      return bool ? <FitnessCenterIcon sx={{ fontSize: 58, color: green[600] }}/> : <FitnessCenterIcon sx={{ fontSize: 58 }}/>;
    default:
      break;
  }
};

const Preferences = ({ venues }) => {
  const [preferences, setPreferences] = useState({ ...venues.preferences });

  const navigate = useNavigate();
  console.log(preferences);
  const handleClick = (e) => {
    const { name, checked }= e.target;
    console.log(checked);
    setPreferences({ ...preferences, [name]: checked });
  };

  return (
    <>
      <Container sx={{ p: 2 }}>
        <Typography variant='h5' align='center' mt={ 5 }>How do you like to spend time?</Typography>
        <div className='icons-container'>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.bar, 'bar') }
              checkedIcon={ icon(preferences.bar, 'bar') }
              defaultChecked={ preferences.bar }
              onClick={handleClick}
              name='bar'
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.restaurant, 'restaurant') }
              checkedIcon={ icon(preferences.restaurant, 'restaurant') }
              defaultChecked={ preferences.restaurant }
              onClick={handleClick}
              name='restaurant'
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.park, 'park') }
              checkedIcon={ icon(preferences.park, 'park') }
              defaultChecked={ preferences.park }
              onClick={handleClick}
              name='park'
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.pool, 'pool') }
              checkedIcon={ icon(preferences.pool, 'pool') }
              defaultChecked={ preferences.pool }
              onClick={handleClick}
              name='pool'
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.gym, 'gym') }
              checkedIcon={ icon(preferences.gym, 'gym') }
              defaultChecked={ preferences.gym }
              onClick={handleClick}
              name='gym'
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={ icon(preferences.library, 'library') }
              checkedIcon={ icon(preferences.library, 'library') }
              defaultChecked={ preferences.library }
              onClick={handleClick}
              name='library'
            />
          </Card>
        </div>
        <Button txt="Save"
          type="submit"
          variant='contained'
          color='secondary'
          fullWidth = {true}
          onClick={() => navigate('/')}
        > Save preferences</Button>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    venues: state.venues,
  };
};

export default connect(mapStateToProps)(Preferences);

