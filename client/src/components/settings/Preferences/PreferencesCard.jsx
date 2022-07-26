import React from 'react';

// MUI
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { green } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const icon = (bool, preference) => {
  console.log(preference);
  switch (preference) {
    case 'bar':
      return bool ?
        <LocalBarIcon sx={{ fontSize: 58, color: green[600] }}/> :
        <LocalBarIcon sx={{ fontSize: 58 }}/>;
    case 'park':
      return bool ?
      <ForestIcon sx={{ fontSize: 58, color: green[600] }}/> :
      <ForestIcon sx={{ fontSize: 58 }}/>;
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
    <Card>
      <Checkbox
        icon={ icon(preferences[preference], preference) }
        checkedIcon={ icon(preferences[preference], preference) }
        checked={ preferences[preference] ? true : false }
        onClick={handleClick}
        name={preference}
      />
    </Card>
  );
};

export default PreferencesCard;
