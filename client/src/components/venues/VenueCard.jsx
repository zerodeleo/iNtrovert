/* eslint-disable max-len */
import React, { useState } from 'react';

import { randomImg, barsImg, parksImg } from './../../utils';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ImStarEmpty } from 'react-icons/im';

// MUI Icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const getArrow = (busynessDelta) => {
  return busynessDelta ?
  <ArrowUpwardIcon fontSize='medium' sx={{ color: '#3C905F' }}/> :
  <ArrowDownwardIcon fontSize='medium'sx={{ color: '#b83d43' }}/>;
};

const VenueCard = ({ venue, idx }) => {
  const [toggle, setToggle] = useState(false);

  const handleMapsClick = (e) => {

  };
  const handleToggleClick = (e) => {
    setToggle(!toggle);
  };

  return (
    <section className="venue--card">
      <Card sx={{
        minWidth: 275,
        margin: 2,
        p: 1.5,
        borderRadius: 4,
        bgcolor: '#eee' }} onClick={handleToggleClick}>
        <div className='image-container'>
          <CardMedia
            sx={{ borderRadius: 4 }}
            component="img"
            height="180"
            // eslint-disable-next-line max-len
            image={venue.type === 'park' ? parksImg[idx] : barsImg[idx]}
            alt="park image"
          />
          <FavoriteBorderIcon className='fav-icon'/>
        </div>
        <CardContent className='no-padding' sx={{ p: 0, mt: 1 }}>
          <Typography variant="h5" component="div">
            { venue.name }
          </Typography>
          <Typography color="text.secondary">
            { venue.vicinity }
          </Typography>
          { toggle ?
          <div>
            <Typography align='center' color="text.secondary" variant="h6" mt={ 2 }>
            Busyness:
            </Typography>
            <Typography align='center' color="#985d8b" variant="h4" mt={ 0 }>
              { venue.busynessTxt }
            </Typography>
            <Typography align='center' mt={ 0 }>
              { venue.busynessDeltaTxt }<br/>{ getArrow(venue.busynessDelta) }
            </Typography>
          </div> :
          null }
          { !toggle ?
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Busyness: { venue.busynessTxt }</Typography>
              <Typography color="text.secondary">{venue.type}</Typography>
            </div> : null }
          { toggle ?
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>

            <Typography color="text.secondary" name="maps" onClick={handleMapsClick}sx={{ color: '#35463D' }}>OPEN IN MAPS</Typography>
            <Typography color="text.secondary" name="maps" onClick={handleMapsClick}>
              <a target="_blank"
                style={{ textDecoration: 'none', color: 'grey' }}
                rel="noreferrer"
                href={`https://www.google.com/maps/place/?q=place_id:${venue.place_id}`}>OPEN IN MAPS</a>
            </Typography>
            <Typography color="text.secondary"><ImStarEmpty /> Ratings: { venue.rating }</Typography>
          </div> : null }
        </CardContent>
      </Card>
    </section>
  );
};

export default VenueCard;
