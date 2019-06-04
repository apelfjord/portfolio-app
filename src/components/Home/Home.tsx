import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchNumber,
  increase,
  decrease
} from "../../redux/actions/numberActions";
import { getContent } from "../../redux/actions/contentActions";
import { HomeContainer } from "./styled";
import Button from "../../common/Button/Button";

type OwnProps = {
  number: number;
  content: object,
  decrease(): void;
  increase(): void;
  fetchNumber(): void;
  getContent(): void;
};

class Home extends Component<OwnProps> {
  handleDec = () => {
    this.props.decrease();
  };

  handleInc = () => {
    this.props.increase();
  };

  handleFetch = () => {
    this.props.fetchNumber();
  };

  handleDb = () => {
    this.props.getContent();
  };

  render() {
    return (
      <HomeContainer className="Home">
        <p>{this.props.number}</p>
        <Button onClick={this.handleDec} title="Decrease" />
        <Button onClick={this.handleInc} title="Increase" />
        <p>
          <Button onClick={this.handleFetch} title="Fetch number from server" />
        </p>
        <Button onClick={this.handleDb} title="Fetch db to page" />
        <p>
          {JSON.stringify(this.props.content)}
        </p>
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  number: state.numbers.number,
  content: state.content.content
});

export default connect(
  mapStateToProps,
  {
    fetchNumber,
    increase,
    decrease,
    getContent
  }
)(Home);
