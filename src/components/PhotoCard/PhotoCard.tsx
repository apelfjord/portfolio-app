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
  element: any,
};

class PhotoCard extends Component<OwnProps> {
  render() {  
    const element = this.props.element;
    return (
      <PhotoCardContainer>
        <PhotoCardImage src={element.URL}/>
        {element.title ? <PhotoCardTitle>{element.title}</PhotoCardTitle> : null}
        {element.content ? <PhotoCardText>{element.content}</PhotoCardText> : null}
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


