import React from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, red, yellow } from '@mui/material/colors';


// MUI Icons
import StarIcon from '@mui/icons-material/Star';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const getIcon = (type) => {
  switch (type) {
    case 'bar':
      return <LocalBarIcon fontSize='large' sx={{ color: yellow[600] }}/>;
    case 'park':
      return <ForestIcon fontSize='large' sx={{ color: green[500] }}/>;
    default:
      return;
  }
};

const getArrow = (busynessDelta) => {
  return busynessDelta ?
  <ArrowUpwardIcon fontSize='large' sx={{ color: green[500] }}/> :
  <ArrowDownwardIcon fontSize='large'sx={{ color: red[500] }}/>;
};

const VenueCard = ({ venue }) => {
  return (
    <section className='venue--card'>
      {/* <h2>{venue.name}</h2>
      <p>{venue.vicinity}</p>
      <p>{venue.type}</p>
      <p>{venue.rating}</p>
      <p>{venue.busynessDelta}</p>
      <p>{venue.busynessTxt}</p>
      <p>{venue.busynessNum}</p> */}
      <Card variant="outlined" sx={{ minWidth: 275, margin: 2, bgcolor: '#fbf5fc' }}>
        <CardContent>
          <div>
            {/* <Typography className='align' variant='h6' color="text.secondary" gutterBottom>
              <StarBorderIcon size="large"
              /> {venue.rating}
              { getIcon(venue.type) }
            </Typography> */}

          </div>
          <Typography variant="h5" component="div">
            { venue.name }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            { venue.vicinity }
          </Typography>
          <div className='align'> Ratings
            <StarIcon
              sx={{ color: yellow[800] }}
            /> {venue.rating}
          </div>
          <Typography variant="h6" className='busyness-txt'>
            { venue.busynessTxt }
            {getArrow(venue.busynessDelta)}
          </Typography>
        </CardContent>
        <div className='action-align'>
          <Button size="small" >Open in Maps</Button>
          { getIcon(venue.type) }
        </div>
      </Card>
    </section>
  );
};

export default VenueCard;
