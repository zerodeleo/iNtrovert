import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Component
import UserSettings from './settings/UserSettings';
import VenuesList from './venues/VenuesList';
import BottomNav from './layout/BottomNav';

// MUI
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dash = ({ auth }) => {
  if (!auth.uid) return <Navigate to="/signin" />;

  const [settings, setSettings] = useState(false);
  const [pref, setPref] = useState(false);

  const propTest = 'propTest...HELLO';

  const toggleSettings = (boolean) => (event) => {
    setSettings(boolean);
  };
  const togglePref = (boolean) => (event) => {
    setPref(boolean);
  };

  return (
    <section className="Dash">
      <AppBar color='secondary' position="static">
        <Toolbar>
          <AccountCircleIcon fontSize='large'/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello {auth.username}
          </Typography>
          <UserSettings
            settings={settings}
            open={settings}
            toggleSettings={toggleSettings}
            propTest={propTest}
          />

        </Toolbar>
      </AppBar>
      <VenuesList />
      <BottomNav
        pref={pref}
        togglePref={togglePref}
        open={pref}
        anchor={'bottom'}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Dash);
