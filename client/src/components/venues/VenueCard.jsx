import React from 'react';

const VenueCard = ({ venue }) => {
return(
    <section className='venue--card'> 
        <h2>{venue.name}</h2>
        <p>{venue.vicinity}</p>
        <p>{venue.type}</p>
        <p>{venue.rating}</p>
        <p>{venue.busynessDelta}</p>
        <p>{venue.busynessTxt}</p>
        <p>{venue.busynessNum}</p>
        <h2>hello</h2>
    </section>
)
}

export default VenueCard;