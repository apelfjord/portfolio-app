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
    return (
      <VideoCardContainer>
        <VideoCardFile controls>
          <source
            src={element.URL}
            type='video/mp4' />
        </VideoCardFile>
        <VideoCardTitle>{element.title}</VideoCardTitle>
        <VideoCardText>{element.content}</VideoCardText>
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
