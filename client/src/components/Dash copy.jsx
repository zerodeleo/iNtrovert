// import React from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';

// // Redux
// import { connect } from 'react-redux';

// // Component
// import VenuesList from './venues/VenuesList';
// import BottomNav from './layout/BottomNav';

// // MUI
// import AppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@mui/icons-material/Settings';
// import Typography from '@mui/material/Typography';
// import Toolbar from '@mui/material/Toolbar';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PreferencesList from './settings/Preferences/PreferencesList';

// const DashCopy = ({ auth }) => {
//   const navigate = useNavigate();
//   if (!auth.uid) return <Navigate to="/signin" />;

//   return (
//     <section className="Dash">
//       <AppBar color='secondary' position="static">
//         <Toolbar>
//           <AccountCircleIcon fontSize='large'/>

//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Hello {auth.username}
//           </Typography>
//           {/* <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={() => navigate('/settings')}
//             color="inherit"
//           >
//             <SettingsIcon />
//           </IconButton> */}

//         </Toolbar>
//       </AppBar>
//       {/* <PreferencesList /> */}
//       <VenuesList />
//       <BottomNav />
//     </section>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// // export default connect(mapStateToProps, null)(Dash);
