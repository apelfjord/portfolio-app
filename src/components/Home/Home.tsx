import React, { Component } from "react";
import { connect } from "react-redux";

import { getContent } from "../../redux/actions/contentActions";
import { HomeContainer } from "./styled";
import Display from "../Display/Display";

type OwnProps = {
  content: object;
  getContent(): void;
};

class Home extends Component<OwnProps> {
  componentWillMount() {
    this.props.getContent();
  }

  render() {

    if (
      !this.props.content ||
      Object.entries(this.props.content).length === 0
    ) {
      this.props.getContent();
      return null;
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
  }  
};

export default connect(
  mapStateToProps,
  { getContent }
)(Home);
