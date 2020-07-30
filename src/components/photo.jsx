import React, { Component } from 'react';

class Photo extends Component {
  handleClick = () => {
    if (this.props.selectPhoto) {
      this.props.selectPhoto(this.props.id);
    }
  }

  render() {
    const src = `https://farm2.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`;
    return (
      <img src={src} className="photo" onClick={this.handleClick} />
    );
  }
}

export default Photo;

// links
// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37dbdb15551ecb80020e667417abf25d&tags=blackforapp&format=json&nojsoncallback=1
// https://starkovden.github.io/Retrieve-gallery-using-Flickr-API.html
// https://farm2.staticflickr.com/1234/4729235723_43217749f0.jpg
// https://live.staticflickr.com/1234/4729235723_8f68750c1b_h.jpg
// https://www.flickr.com/photos/artemb/4729235723/in/album-72157624345798506/
// https://github.com/lcchand/Project_11-React-Flickr-Gallery/blob/master/src/components/PhotoContainer.js
