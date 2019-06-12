import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  TestNewComponentContainer, 
} from './styled';
import PhotoCard from 'components/PhotoCard/PhotoCard';
import VideoCard from 'components/VideoCard/VideoCard';

type OwnProps = {
  content: any;
};

class TestNewComponent extends Component<OwnProps> {
  render() {  
    return (
      <TestNewComponentContainer>
        <VideoCard element={[]}/>
      </TestNewComponentContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(TestNewComponent);


