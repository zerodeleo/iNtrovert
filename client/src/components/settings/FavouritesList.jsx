import React, { useState, useEffect } from 'react';

// components
import Btn from '../layout/Btn';
import VenuesList from '../venues/VenuesList';

// MUI
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const FavouritesList = ({ fav, toggleFavourites }) => {
  const favContainer = () =>
    (
      <Box sx={{ width: '100vw', height: '75vh', fontFamily: 'Red Hat Display' }}
      >
        <VenuesList></VenuesList>
        <Btn
          onClick={toggleFavourites(false)}
          txt="BACK"
          variant="contained"
          sx={{ backgroundColor: '#35463D',
            borderRadius: '12px',
            color: '#CBCDCB',
            fontFamily: 'Red Hat Display',
            fontWeight: '500',
            letterSpacing: '2px',
            width: '100%',
          }}
        />
      </Box>
    );
  return (
    <section className="favs pd">
      <Drawer
        open={fav} // favs
        onClose={toggleFavourites(false)}
        anchor='bottom'
      >
        {favContainer(fav)}
      </Drawer>
    </section>
  );
};

export default FavouritesList;
