import React, { Component } from 'react';
import Photo from './photo';
import PhotoList from './photo_list';

const API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      photos: [],
      selectedPhotoId: "4729234249",
      selectedPhotoServer: "1092",
      selectedPhotoSecret: "163df9899d"
    };
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=blackforapp&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photos: result.photos.photo
          });

          // const firstPhoto = result?.photos?.photo?.[0];
      //     let firstPhoto;
      //     if (result && result.photos && result.photos.photo) {
      //       firstPhoto = result.photos.photo[0];
      //       this.selectPhoto(firstPhoto.id, firstPhoto.server, firstPhoto.secret);
      //     }
      //   },
      //   (error) => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
        }
      );
  }

  selectPhoto = (id, server, secret) => {
    this.setState({
      selectedPhotoId: id,
      selectedPhotoServer: server,
      selectedPhotoSecret: secret
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="selected-photo">
            <Photo id={this.state.selectedPhotoId} server={this.state.selectedPhotoServer} secret={this.state.selectedPhotoSecret} key={this.state.selectedPhotoId} />
          </div>
        </div>
        <div className="right-scene">
          <PhotoList photos={this.state.photos} selectPhoto={this.selectPhoto} />
        </div>
      </div>
    );
    // const { error, isLoaded, photos } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //       <ul>
    //         {photos.map(item => (
    //           <li key={item.id}>
    //             {item.secret} {item.owner}
    //           </li>
    //         ))}
    //       </ul>
    //   );
    // }
  }
}

export default App;
