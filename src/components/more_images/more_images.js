import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
 

import './more_images.css';

import crash1 from '../../img/crash1.jpg';
import crash2 from '../../img/crash2.jpg';
import crash_layla1 from '../../img/crash_layla1.jpg';
import crash_layla2 from '../../img/crash_layla2.jpg';
import layla1 from '../../img/layla1.jpg';
import layla2 from '../../img/layla2.jpg';
import layla_beach from '../../img/layla_beach.jpg';


const images = [crash_layla1, layla_beach, crash1, layla1, crash_layla2, crash2, layla2];


class MoreImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="more-images" onClick={() => this.setState({ isOpen: true })}>
          <i className="material-icons">arrow_forward</i>
          <div>
            More images for Tyler Cookson's dogs
          </div>
        </div>

        {isOpen &&
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })}
                onMoveNextRequest={() => this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })}
                discourageDownloads='true'
            />
        }
      </div>
    );
  }
}

export default MoreImages;