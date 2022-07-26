import React from 'react';

// MUI
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { green } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

// ICONS
import { GiLaserSparks } from 'react-icons/gi';
import { Typography } from '@mui/material';


const icon = (bool, preference) => {
  switch (preference) {
    case 'bar':
      return bool ?
      <Avatar
        src="https://images.unsplash.com/photo-1517334266-b25264dbe6f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
      /> :
      <Avatar
        src="https://images.unsplash.com/photo-1517334266-b25264dbe6f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
      />;
    case 'park':
      return bool ?
      <GiLaserSparks color="pink" fontSize="1.5em" /> :
      <GiLaserSparks fontSize="1.5em" />;
    case 'restaurant':
      return bool ?
      <RestaurantIcon sx={{ fontSize: 58, color: green[600] }}/> :
      <RestaurantIcon sx={{ fontSize: 58 }}/>;
    case 'library':
      return bool ?
      <LocalLibraryIcon sx={{ fontSize: 58, color: green[600] }}/> :
      <LocalLibraryIcon sx={{ fontSize: 58 }}/>;
    case 'pool':
      return bool ?
      <PoolIcon sx={{ fontSize: 58, color: green[600] }}/> :
      <PoolIcon sx={{ fontSize: 58 }}/>;
    case 'gym':
      return bool ?
      <FitnessCenterIcon sx={{ fontSize: 58, color: green[600] }}/> :
      <FitnessCenterIcon sx={{ fontSize: 58 }}/>;
    default:
      break;
  }
};

const PreferencesCard = ({ handleClick, preference, preferences }) => {
  return (
    <Card
      onClick={(e) => {
        handleClick(e, preferences[preference] ? true : false);
      } }
      name={preference}
    >
      {/* <Checkbox
        // icon={ icon(preferences[preference], preference) }
        // checkedIcon={ icon(preferences[preference], preference) }
        checked={ preferences[preference] ? true : false }
        onClick={handleClick}
        name={preference}
      /> */}
      {/* <Checkbox
        // icon={ icon(preferences[preference], preference) }
        // checkedIcon={ icon(preferences[preference], preference) }
        checked={ preferences[preference] ? true : false }
        onClick={handleClick}
        name={preference}
      /> */}
      <br/>
      <Typography sx={{
        fontSize: '0.9rem',
        fontFamily: 'Red Hat Display',
        fontStyle: 'italic',
        fontWeight: '10',
        color: 'grey',
      }}>{preference}</Typography>
    </Card>
  );
};

export default PreferencesCard;
