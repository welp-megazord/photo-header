import React from 'react';
import css from './style.jsx';
const MapBox = (props) => {
  return (
    <css.rest_subheader.mapImage src="https://maps.googleapis.com/maps/api/staticmap?scale=2&amp;center=34.142036%2C-118.132046&amp;language=None&amp;zoom=15&amp;markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.142036%2C-118.132046&amp;client=gme-yelp&amp;sensor=false&amp;size=286x135&amp;signature=EiISUhp-4K5YVTX2ObLTFnPm2TA=">
    </css.rest_subheader.mapImage>
  );
}
export default MapBox;