import React, { Component } from 'react';
import Photo from './photo';

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map(photo => <Photo id={photo.id} server={photo.server} secret={photo.secret} key={photo.id} selectPhoto={props.selectPhoto} />)}
    </div>
  );
};

export default PhotoList;
