/* eslint-disable max-len */
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
  if (!auth.uid) return <Navigate to="/welcome" />;

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
      <AppBar
        position="static"
        sx={{
          backdropFilter: 'blur(2px)',
          letterSpacing: '2px',
          backgroundColor: 'transparent',
          color: '#3F273A',
          boxShadow: 'none',
          zIndex: '999',
          textTransform: 'uppercase' }}>
        <Toolbar>
          {/* <AccountCircleIcon fontSize='large'/> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Red Hat Display', paddingLeft: '12px' }}>
              Hello {auth.username}
          </Typography>
          <div style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '20px', paddingBottom: '15px' }}>
            <img
              style={{ borderRadius: '30px' }}
              width='60px'
              height='60px'
              src='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50'/>
          </div>

        </Toolbar>
      </AppBar>
      <VenuesList />
      {/* <UserSettings
        settings={settings}
        open={settings}
        toggleSettings={toggleSettings}
        propTest={propTest}
      /> */}
      <BottomNav
        // anchor={'bottom'}
        pref={pref}
        settings={settings}
        togglePref={togglePref}
        toggleSettings={toggleSettings}
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
