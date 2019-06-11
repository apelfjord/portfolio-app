import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  PhotoCardContainer, 
  PhotoCardTitle, 
  PhotoCardText,
  PhotoCardImage
} from './styled';

type OwnProps = {
  content: any;
};

class PhotoCard extends Component<OwnProps> {
  render() {  
    const photo = this.props.content[0].portfolio.content.sections[2].elements[0].URL;
    return (
      <PhotoCardContainer>
        <PhotoCardImage src={photo}/>
        <PhotoCardTitle>PhotoCard</PhotoCardTitle>
        <PhotoCardText>Lorem ipsum dolor</PhotoCardText>
      </PhotoCardContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(PhotoCard);


