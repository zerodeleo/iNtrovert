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
      <Card sx={{ minWidth: 275, margin: 2, bgcolor: '#fbf5fc' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            { venue.name }
          </Typography>
          <Typography color="text.secondary">
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
