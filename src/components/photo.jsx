import React, { Component } from 'react';

class Photo extends Component {
  handleClick = () => {
    console.log(this.props);
    if (this.props.selectPhoto) {
      this.props.selectPhoto(this.props.id, this.props.server, this.props.secret);
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
