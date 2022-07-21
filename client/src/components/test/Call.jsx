import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useGeolocated } from 'react-geolocated';

// Actions
import apiCall from '../../store/actions/apiActions';

// Utils
import { calculateDistanceBetweenLocations } from '../../utils';

const Call = ({ apiCallDispatch }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  // useEffect(() => {
  //   apiCallDispatch({ location: 'bla', type: 'park' });
  // }, []);

  useEffect(() => {
    if (coords && isGeolocationAvailable && isGeolocationEnabled) {
      // const location = { lat: coords.latitude, lon: coords.longitude };
      // const location = { lat: 59.337367, lon: 18.008988 }; // ICA MAXI
      const location = { lat: 59.312696, lon: 18.082750 }; // NYTORGET
      if (calculateDistanceBetweenLocations(location)) {
        localStorage.setItem('location', JSON.stringify(location));
        // HERE IS WHERE WE MAKE THE API CALL
        apiCallDispatch({ location, type: 'park' });
      }
    }
  }, [coords]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{coords.speed}</td>
        </tr>
      </tbody>
    </table>
) : (
    <div>Getting the location data&hellip; </div>
);
};

const mapStateToProps = (state) => {
  return {
    api: state.api,
  };
};

const mapDispatchToProps = (dispatch) => ({
  apiCallDispatch: ({ location, type }) => dispatch(apiCall({ location, type })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Call);
