import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  TestComponentContainer, 
  TestComponentTitle, 
  TestComponentText
} from './styled';

type OwnProps = {
  content: any;
};

class TestComponent extends Component<OwnProps> {
  render() {  
    return (
      <TestComponentContainer>
        <TestComponentTitle>TestComponent</TestComponentTitle>
        <TestComponentText>Lorem ipsum dolor</TestComponentText>
      </TestComponentContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(TestComponent);


