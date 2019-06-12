import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  VideoCardContainer,
  VideoCardTitle,
  VideoCardText,
  VideoCardFile
} from './styled';

type OwnProps = {
  content: any;
  element: any;
};

class VideoCard extends Component<OwnProps> {
  render() {
    const element = this.props.element;
    const videoPath = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
    return (
      <VideoCardContainer>
        <VideoCardFile controls>
          <source src={videoPath} type='video/mp4'></source>
        </VideoCardFile>
        <VideoCardTitle>VideoCard</VideoCardTitle>
        <VideoCardText>Lorem ipsum dolor</VideoCardText>
      </VideoCardContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(VideoCard);
