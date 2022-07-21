import React from "react";
import VenueCard from "./VenueCard";

const VenuesCollection = ({ venueList }) => {

    const sortVenueList = (venueList) => {
        return venueList
          .sort((a, b) => a.busynessNum - b.busynessNum)
          .sort((a, b) => {
            if(a.busynessNum === b.busynessNum) {
              return a.busynessDeltaNum - b.busynessDeltaNum
            }
            return a.busynessNum
          });
    };
    
    return (
        <div>
            {sortVenueList.map((venue) => (
                <VenueCard
                key={venue.id}
                id={venue.place_id}
                venue={venue}
                 />
            ))}
        </div>
    );
}
export default VenuesCollection;