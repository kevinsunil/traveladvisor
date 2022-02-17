import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const coords = {lat: 0, lng: 0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDFr96IRy2Y2w-l0i3wmHxh7Z_YeQaDsl0' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={''}
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;