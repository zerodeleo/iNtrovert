import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
// import Button from './layout/Button';
// import UserSettings from './settings/UserSettings';

// MUI
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import Btn from './layout/Btn';




const Dash = ({ auth }) => {
  const navigate = useNavigate();
  if (!auth.uid) return <Navigate to="/signin" />;
  
  const navigateToVenue = () => {
    console.log('hello')
    return <Navigate to="/venues" />
  }
  return (
    <section className="Dash">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello {auth.username}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate('/settings')}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Btn
        className="dash__btn dash__btn--redirect"
        onClick={navigateToVenue}
        txt="see venues"
        type="submit"
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
