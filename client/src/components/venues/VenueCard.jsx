import React from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, red, yellow } from '@mui/material/colors';


// MUI Icons
import StarIcon from '@mui/icons-material/Star';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ForestIcon from '@mui/icons-material/Forest';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
  <ArrowUpwardIcon fontSize='medium' sx={{ color: green[500] }}/> :
  <ArrowDownwardIcon fontSize='medium'sx={{ color: red[500] }}/>;
};

const VenueCard = ({ venue }) => {
  return (
    <section className='venue--card'>
      <Card sx={{ minWidth: 275, margin: 2, p: 1.5, borderRadius: 4, bgcolor: '#eee' }}>
        <CardMedia
          sx={{ borderRadius: 4 }}
          component="img"
          height="180"
          // eslint-disable-next-line max-len
          image="https://images.unsplash.com/photo-1627343101316-9adfdfddd8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="park image"
        />
        <FavoriteBorderIcon className='fav-icon'/>
        <CardContent sx={{ p: 0, mt: 1 }}>
          <Typography variant="h5" component="div">
            { venue.name }
          </Typography>
          <Typography color="text.secondary">
            { venue.vicinity }
          </Typography>
          {/* <div className='align'> Ratings
            <StarIcon
              sx={{ color: yellow[800] }}
            /> {venue.rating}
          </div> */}
          <Typography variant="h6" mt={ 1 }>
            Busyness:{ venue.busynessTxt }
          </Typography>
          {/* <div className='arrow-text'>
            {getArrow(venue.busynessDelta)}
            <Typography>People are expected<br></br> to arrive soon</Typography>
          </div> */}
        </CardContent>
        {/* <div className='action-align'>
          <Button size="small"><PlaceIcon /> Open in map</Button>
          { getIcon(venue.type) }
        </div> */}
      </Card>
    </section>
  );
};

export default VenueCard;
