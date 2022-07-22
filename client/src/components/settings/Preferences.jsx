import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { green } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Preferences = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ p: 2 }}>
        <Typography variant='h5' align='center' mt={ 5 }>How do you like to spend time?</Typography>
        <div className='icons-container'>
          <Card>
            <Checkbox
              {...label}
              icon={<LocalBarIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<LocalBarIcon sx={{ fontSize: 58, color: green[600] }}/>}
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={<RestaurantIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<RestaurantIcon sx={{ fontSize: 58, color: green[600] }}/>}
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={<ForestIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<ForestIcon sx={{ fontSize: 58, color: green[600] }}/>}
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={<LocalLibraryIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<LocalLibraryIcon sx={{ fontSize: 58, color: green[600] }}/>}
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={<PoolIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<PoolIcon sx={{ fontSize: 58, color: green[600] }}/>}
            />
          </Card>
          <Card>
            <Checkbox
              {...label}
              icon={<FitnessCenterIcon sx={{ fontSize: 58 }}/>}
              checkedIcon={<FitnessCenterIcon sx={{ fontSize: 58, color: green[600] }}/>}
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

export default Preferences;

