import React from 'react';
import css from './style.jsx';
const MapBox = (props) => {
  return (
    <css.rest_subheader.mapImage src="https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=">
    </css.rest_subheader.mapImage>
  );
}
export default MapBox;