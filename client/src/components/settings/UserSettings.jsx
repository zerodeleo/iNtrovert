import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// MUI
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

// Actions
import {
  editUser,
  deleteUser,
  logoutUser,
} from '../../store/actions/authActions';

// Components
import Input from '../layout/Input';
import Btn from '../layout/Btn';
import Err from '../error/Err';


const UserSettings = ({
  auth,
  authError,
  editUserDispatch,
  deleteUserDispatch,
  logoutUserDispatch,
  toggleSettings,
  settings,
  propTest,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [err, setErr] = useState(null);
  const [usernameErr, setUsernameErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [user, setUser] = useState({
    uid: auth.uid,
    username: auth.username,
    password: '',
    passwordCheck: '',
  });

  useEffect(() => {
    if (authError) {
      setErr({ ...err, msg: authError });
    }
  }, [auth]);

  if (!auth.uid) return <Navigate to="/signin" />;

  const handeSettingsMenu = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const handleChange = (e) => {
    setErr(null);
    setUsernameErr(null);
    setPasswordErr(null);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case 'save-username':
        if (user.username === '') {
          return setUsernameErr({ ...err, msg: 'Please fill in empty fields' });
        }
        if (user.username === auth.username) {
          return setUsernameErr({ ...err, msg: 'Change username before save' });
        }
        editUserDispatch({ ...user, username: user.username });
        break;
      case 'save-password':
        if (user.password === '' || user.passwordCheck === '') {
          return setPasswordErr({ ...err, msg: 'Please fill in empty fields' });
        }
        if (user.password !== user.passwordCheck) {
          return setPasswordErr({ ...err, msg: 'Passwords don\'t match' });
        }
        editUserDispatch({ ...user, password: user.password });
        break;
      case 'logout':
        logoutUserDispatch();
        break;
      case 'delete':
        deleteUserDispatch(auth.uid);
        break;
      default:
        console.log('what the hell are you doing????');
        break;
    }
  };

  const settingMenu = () => (
    <Box
      sx={{ width: '100vw', fontFamily: 'Red Hat Display' }}
    >
      <div>
        <Accordion expanded={expanded === 'changeUsername'} onChange={handeSettingsMenu('changeUsername')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Username
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Change your username</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Input
                className="input input--edit-username"
                placeholder={ user.username }
                value={ user.username }
                onChange={handleChange}
                name="username"
                type="text"
                autoComplete="username"
                label="Username"
              />
              <Btn
                className="btn btn__settings btn__settings--save-user"
                txt="Save username"
                name="save-username"
                onClick={handleClick}
                sx={{ color: '#985D8A' }}
              />
              { usernameErr ? <Err msg={usernameErr.msg} /> : null }

            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handeSettingsMenu('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Password</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
            Change your password
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Input
                className="input input--edit-password"
                value={ user.password }
                onChange={handleChange}
                name="password"
                type="password"
                autoComplete="new-password"
                label="Enter password"
                required
              />
              <Input
                className="input input--edit-passwordCheck"
                value={ user.passwordCheck }
                onChange={handleChange}
                name="passwordCheck"
                type="password"
                autoComplete="new-password"
                label="Repeat password"
                required
              />
              { passwordErr ? <Err msg={passwordErr.msg} /> : null }
              <Btn
                className="btn btn__settings btn__settings--save-user"
                txt="Save password"
                name="save-password"
                onClick={handleClick}
                sx={{ color: '#985D8A' }}
              />
              { err ? <Err msg={err.msg} /> : null }
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handeSettingsMenu('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            My account
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Btn
                className="btn__settings--delete"
                txt="Delete Account"
                name="delete"
                variant="outlined"
                color="error"
                onClick={handleClick}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', p: '10%' }}>
          <Btn
            onClick={toggleSettings(false)}
            txt="BACK"
            variant="contained"
            sx={{ backgroundColor: '#35463D',
              borderRadius: '12px',
              color: '#CBCDCB',
              fontFamily: 'Red Hat Display',
              fontWeight: '500',
              letterSpacing: '2px' }}
          />
          <Btn
            className="btn btn__settings btn__settings--logout"
            variant='contained'
            color='secondary'
            txt="Log Out"
            name="logout"
            onClick={handleClick}
            sx={{
              backgroundColor: '#653E5C',
              borderRadius: '12px',
              color: '#CBCDCB',
              fontFamily: 'Red Hat Display',
              fontWeight: '500',
              letterSpacing: '2px' }}
          />
        </Box>
      </div>
    </Box>
  );

  return (
    <section className="UserSettings pd">
      <Drawer
        open={settings}
        onClose={toggleSettings(false)}
        anchor='bottom'
      >
        {settingMenu(settings)}
      </Drawer>

    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  editUserDispatch: (user) => dispatch(editUser(user)),
  deleteUserDispatch: (uid) => dispatch(deleteUser(uid)),
  logoutUserDispatch: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
