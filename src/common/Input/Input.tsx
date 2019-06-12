import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  InputContainer,
  InputTitle,
  InputField,
  InputFieldLarge
} from './styled';

type OwnProps = {
  content: any;
  title: string,
  type: string,
};

class Input extends Component<OwnProps> {
  render() {
    switch (this.props.type) {
      case 'text':
        return (
          <InputContainer>
            <InputTitle>{this.props.title}</InputTitle>
            <InputField type='text'/>
          </InputContainer>
        );
      case 'textbox':
        return (
          <InputContainer>
            <InputTitle>{this.props.title}</InputTitle>
            <InputFieldLarge type='textbox' />
          </InputContainer>
        )
      default:
        return 'Something went wrong'
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(Input);


