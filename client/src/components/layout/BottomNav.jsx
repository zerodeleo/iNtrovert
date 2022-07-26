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

const BottomNav = (props) => {
  const { pref, togglePref } = props;

  const popupMenu = () => (
    <Box
      sx={{ width: '100vw' }}

    >
      <div>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', p: '10%' }}>
          <PreferencesList togglePref={togglePref} />
          <Btn
            onClick={togglePref(false)}
            txt="BACK"
            variant="contained"
          />
        </Box>
      </div>
    </Box>
  );
  return (
    <div>
      <Box sx={{
        bottom: 0,
        position: 'absolute',
        width: '100%',
      }}
      >
        <BottomNavigation sx={{ backgroundColor: '#35463D', borderRadius: '15px', p: '5px' }}
          showLabels
        >
          <BottomNavigationAction
            onClick={togglePref(true)}
            icon={<AiOutlineUser />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }} />
          <BottomNavigationAction
            onClick={togglePref(true)}
            icon={<TuneIcon />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }}/>
          <BottomNavigationAction
            icon={<AiOutlineHeart />}
            sx={{ color: '#CBCDCB', fontSize: '25px', p: '3px' }} />
        </BottomNavigation>
        {/* <BottomNavigation
          showLabels
        >
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
        {/* <BottomNavigationAction onClick={togglePref(true)} label="Preferences" icon={<TuneIcon />} />
        </BottomNavigation> */}
      </Box>
      <Drawer
        open={pref}
        onClose={togglePref(false)}
        anchor={'bottom'}
      >
        {popupMenu(pref)}
      </Drawer>
    </div>
  );
};

export default BottomNav;
