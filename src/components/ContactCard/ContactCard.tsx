import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ContactCardContainer,
  ContactCardTitle,
  ContactCardText
} from './styled';
import Input from 'common/Input/Input';
import Button from 'common/Button/Button';

type OwnProps = {
  content: any;
};

class ContactCard extends Component<OwnProps> {
  render() {
    return (
      <ContactCardContainer>
        <ContactCardTitle>ContactCard</ContactCardTitle>
        <ContactCardText>Lorem ipsum dolor</ContactCardText>
        <Input
          type='text'
          title='Name:'
        />
        <Input
          type='textbox'
          title='Message:'
        />
        <Button
          onClick={() => {}}
          title='Submit'
        />
      </ContactCardContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(ContactCard);


