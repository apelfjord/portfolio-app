import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  AudioCardContainer, 
  AudioCardTitle, 
  AudioCardText
} from './styled';

type OwnProps = {
  content: any;
};

class AudioCard extends Component<OwnProps> {
  render() {  
    return (
      <AudioCardContainer>
        <AudioCardTitle>AudioCard</AudioCardTitle>
        <AudioCardText>Lorem ipsum dolor</AudioCardText>
      </AudioCardContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(AudioCard);


