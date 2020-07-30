import React, { Component } from 'react';
import Photo from './photo';
import PhotoList from './photo_list';

const API_KEY = '37dbdb15551ecb80020e667417abf25d';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: [],
      selectedPhotoId: " "
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
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
    // const { error, isLoaded, photos } = this.state;
    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
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
