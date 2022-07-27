import React from 'react';

// MUI
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';

// ICONS
import { Typography } from '@mui/material';


const icon = (bool, preference) => {
  switch (preference) {
    case 'bar':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      /> :
      <img
        className='icon-img fill'
        src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />;
    case 'park':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1589208733220-40ef1ca2bdb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      /> :
    <img
      className='icon-img fill'
      src="https://images.unsplash.com/photo-1589208733220-40ef1ca2bdb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    />;
    case 'restaurant':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      /> :
    <img
      className='icon-img fill'
      src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />;
    case 'library':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1601807576339-50331d6eb24b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
      /> :
    <img
      className='icon-img fill'
      src="https://images.unsplash.com/photo-1601807576339-50331d6eb24b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
    />;
    case 'pool':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1560088939-ddaf4d3e0d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      /> :
    <img
      className='icon-img fill'
      src="https://images.unsplash.com/photo-1560088939-ddaf4d3e0d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    />;
    case 'gym':
      return bool ?
      <img
        className='icon-img select-pref'
        src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      /> :
    <img
      className='icon-img fill'
      src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />;
    default:
      break;
  }
};

const PreferencesCard = ({ handleClick, preference, preferences }) => {
  return (
    <Card sx={{ p: 1 }}>

      <div className='pref-card'>
        <Card
          onClick={(e) => {
            handleClick(e, preferences[preference] ? true : false);
          } }
          name={preference}
        >
          <Checkbox
            sx={{ p: 0 }}
            icon={ icon(preferences[preference], preference) }
            checkedIcon={ icon(preferences[preference], preference) }
            checked={ preferences[preference] ? true : false }
            onClick={handleClick}
            name={preference}
          />
          {/* <Checkbox
        icon={ icon(preferences[preference], preference) }
        checkedIcon={ icon(preferences[preference], preference) }
        checked={ preferences[preference] ? true : false }
        onClick={handleClick}
        name={preference}
      /> */}
          <br/>
        </Card>
        <Typography sx={{
          fontSize: '0.9rem',
          fontFamily: 'Red Hat Display',
          color: 'grey',
          mt: .5, mb: .5,
        }}>{preference}</Typography>
      </div>
    </Card>
  );
};

export default PreferencesCard;
