import React, { Component } from 'react';
// import flickr from 'flickr-sdk';

import Photo from './photo';
import PhotoList from './photo_list';

const API_KEY = '37dbdb15551ecb80020e667417abf25d';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      selectedPhotoId: " ",
    };
  }


  selectPhoto = (id) => {
    this.setState({
      selectedPhotoId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="selected-photo">
            <Photo id={this.state.selectedPhotoId} />
          </div>
        </div>
        <div className="right-scene">
          <PhotoList photos={this.state.photos} selectPhotos={this.selectPhoto} />
        </div>
      </div>
    );
  }
}

export default App;
