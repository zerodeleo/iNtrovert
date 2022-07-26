// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';


// // whatever
// import Drawer from '@mui/material/Drawer';
// import TuneIcon from '@mui/icons-material/Tune';
// import Btn from './Btn';

// import PreferencesList from '../settings/Preferences/PreferencesList';

// const BottomNav = () => {
//   // const [value, setValue] = useState(0);

//   const [menu, setMenu] = useState(false);

//   const toggleMenu = (boolean) => (event) => {
//     setMenu(boolean);
//   };

//   const popupMenu = () => (
//     <Box
//       sx={{ width: '100vw' }}

//     >
//       <div>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', p: '10%' }}>
//           <PreferencesList />
//           <Btn
//             onClick={toggleMenu(false)}
//             txt="BACK"
//             variant="contained"
//           />
//         </Box>
//       </div>
//     </Box>
//   );

//   return (
//     <div>
//       <Box sx={{
//         bottom: 0,
//         position: 'absolute',
//         width: '100%',
//       }}
//       >
//         <BottomNavigation
//           showLabels
//           // value={value}
//           // onChange={(event, newValue) => {
//           //   setValue(newValue);
//           // }}
//         >
//           <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//           <BottomNavigationAction onClick={toggleMenu(true)} label="Preferences" icon={<TuneIcon />} />
//         </BottomNavigation>
//       </Box>
//       <Drawer
//         open={menu}
//         onClose={toggleMenu(false)}
//         anchor={'bottom'}
//       >
//         {popupMenu(menu)}
//       </Drawer>
//     </div>
//   );
// };

// export default BottomNav;
