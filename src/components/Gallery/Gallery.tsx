import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GalleryContainer, 
  GalleryTitle, 
  GalleryText
} from './styled';
import Iterator from '../Iterator/Iterator';

type OwnProps = {
  content: any;
};

class Gallery extends Component<OwnProps> {
  render() {  
    const hardData = this.props.content[0].portfolio.content.sections[2].elements;
    return (
      <GalleryContainer>
        <GalleryTitle>Gallery</GalleryTitle>
        <GalleryText>Lorem ipsum dolor</GalleryText>
        <Iterator
          alignRow={false}
          iterateOver={hardData}
          onClick={() => {}}
          pickOut='URL'
          />
      </GalleryContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(Gallery);


