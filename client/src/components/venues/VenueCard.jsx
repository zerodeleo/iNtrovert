import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// MUI Icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const getIcon = (type) => {
  switch (type) {
    case 'bar':
      return <LocalBarIcon />;
    case 'park':
      return <ForestIcon />;
    default:
      return;
  }
};

const getArrow = (busynessDelta) => {
  return busynessDelta ?
  <ArrowUpwardIcon sx={{ color: 'green' }}/> :
  <ArrowDownwardIcon sx={{ color: 'red' }}/>;
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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h6' color="text.secondary" gutterBottom>
            <StarBorderIcon /> {venue.rating}
            { getIcon(venue.type) }
          </Typography>
          <Typography variant="h5" component="div">
            { venue.name }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            { venue.vicinity }
          </Typography>
          <Typography variant="body2">
            { venue.busynessTxt } {getArrow(venue.busynessDelta)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Open in Maps</Button>
        </CardActions>
      </Card>
    </section>
  );
};

export default VenueCard;
