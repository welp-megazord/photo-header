import React from 'react';
import { Component } from 'react';
import css from './style.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPhoto: [],
      middlePhoto: [],
      rightPhoto: [],
    }
  }
  render() {
    return (
      <css.photos.h>
        <css.photos.sub_h>

          <css.photos.left_photo>
            <a href="/">
              <img height="250" src="https://s3-media2.fl.yelpcdn.com/bphoto/JDTkes8xSj0u_HmmeHfjxQ/ls.jpg" width="250" />
            </a>
          </css.photos.left_photo>

          <css.photos.middle_photo>
            <a href="/">
              <img height="250" src="https://s3-media3.fl.yelpcdn.com/bphoto/D_85DieA8-G1IDlEjtmU2w/ls.jpg" width="250" />
            </a>
          </css.photos.middle_photo>

          <css.photos.right_photo>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-media1.fl.yelpcdn.com/bphoto/lkvDaCpHw5A-5vW05vF-Ww/ls.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-media1.fl.yelpcdn.com/bphoto/uOriAxEMthRbmQxBi9FIHQ/180s.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-media2.fl.yelpcdn.com/bphoto/PnGVlBtuW_RhHVvR5xaWCA/180s.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-media1.fl.yelpcdn.com/bphoto/z88-7_3LGzyiGa_1uU7ByA/180s.jpg" width="125" />
            </a>
          </css.photos.right_photo>
        </css.photos.sub_h>
      </css.photos.h>
    )
  }
}

export default Photos;