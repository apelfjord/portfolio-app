import React, { Component } from "react";
import { connect } from "react-redux";

import { getContent } from "../../redux/actions/contentActions";
import { HomeContainer } from "./styled";
import Display from "../Display/Display";

type OwnProps = {
  content: object;
};

class Home extends Component<OwnProps> {

  render() {

    console.log(this.props)

    if (!this.props.content || 
    Object.entries(this.props.content).length === 0) {
      return null
    }

    return (
      <HomeContainer className="Home">
        <Display print={this.props.content} />
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    content: state.content.content
  };
};

export default connect(
  mapStateToProps,
  { getContent }
)(Home);
