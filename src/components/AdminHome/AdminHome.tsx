import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  AdminHomeContainer, 
  AdminHomeTitle, 
  AdminHomeText
} from './styled';

type OwnProps = {
  content: any;
};

class AdminHome extends Component<OwnProps> {
  render() {  
    return (
      <AdminHomeContainer>
        <AdminHomeTitle>AdminHome</AdminHomeTitle>
        <AdminHomeText>Lorem ipsum dolor</AdminHomeText>
      </AdminHomeContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content
  };
};

export default connect(mapStateToProps)(AdminHome);


