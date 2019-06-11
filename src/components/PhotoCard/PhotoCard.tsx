import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  PhotoCardContainer, 
  PhotoCardTitle, 
  PhotoCardText
} from './styled';

type OwnProps = {
  content: any;
};

class PhotoCard extends Component<OwnProps> {
  render() {  
    return (
      <PhotoCardContainer>
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


