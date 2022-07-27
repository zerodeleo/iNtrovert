/* eslint-disable max-len */
import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';


// whatever
import Drawer from '@mui/material/Drawer';
import TuneIcon from '@mui/icons-material/Tune';
import Btn from './Btn';

import PreferencesList from '../settings/preferences/PreferencesList';
import UserSettings from '../settings/UserSettings';
import FavouritesList from '../settings/FavouritesList';

const BottomNav = (props) => {
  const { pref, togglePref, settings, toggleSettings, fav, toggleFavourites } = props;

  const popupPrefs = () => (
    <Box
      sx={{ width: '100vw' }}
    >
      <div>
        <Box>
          <PreferencesList togglePref={togglePref} />
        </Box>
      </div>
    </Box>
  );
  return (
    <div>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation sx={{ backgroundColor: '#35463D', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', p: '5px' }}
          showLabels
        >
          <BottomNavigationAction
            onClick={toggleSettings(true)}
            icon={<AiOutlineUser />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }} />
          <BottomNavigationAction
            onClick={togglePref(true)}
            icon={<TuneIcon />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }}/>
          <BottomNavigationAction
            onClick={toggleFavourites(true)}
            icon={<AiOutlineHeart />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }} />
        </BottomNavigation>
      </Box>
      <UserSettings
        settings={settings}
        toggleSettings={toggleSettings}
      />
      <FavouritesList
        fav={fav}
        toggleFavourites={toggleFavourites}
        anchor={'bottom'}
      />
      <Drawer
        open={pref}
        onClose={togglePref(false)}
        anchor={'bottom'}
      >
        {popupPrefs(pref)}
      </Drawer>
    </div>
  );
};

export default BottomNav;
