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
  display: any,
};

class Gallery extends Component<OwnProps> {
  render() {  
    const data = this.props.display;
    return (
      <GalleryContainer>
        <GalleryTitle>{data.title}</GalleryTitle>
        <GalleryText>{data.content}</GalleryText>
        <Iterator
          alignRow={false}
          iterateOver={data.elements}
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


