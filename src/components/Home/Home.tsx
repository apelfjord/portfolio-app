import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchNumber,
  increase,
  decrease
} from "../../redux/actions/numberActions";
import { getContent } from "../../redux/actions/contentActions";
import { HomeContainer } from "./styled";
// import Button from "../../common/Button/Button";
import Display from "../Display/Display";

type OwnProps = {
  number: number;
  content: object;
  decrease(): void;
  increase(): void;
  fetchNumber(): void;
  getContent(): void;
};

class Home extends Component<OwnProps> {
  componentWillMount() {
    this.props.getContent();
  }

  // handleDec = () => {
  //   this.props.decrease();
  // };

  // handleInc = () => {
  //   this.props.increase();
  // };

  // handleFetch = () => {
  //   this.props.fetchNumber();
  // };

  // handleDb = () => {
  //   this.props.getContent();
  // };

  render() {
    console.log(typeof this.props.content);
    console.log(this.props.content);

    if (
      !this.props.content ||
      Object.entries(this.props.content).length === 0
    ) {
      console.log(this.props.content);
      return null;
    }

    return (
      <HomeContainer className="Home">
        <Display print={this.props.content} />
        {/* <p>{this.props.number}</p>
        <Button onClick={this.handleDec} title="Decrease" />
        <Button onClick={this.handleInc} title="Increase" />
        <Button onClick={this.handleFetch} title="Fetch number from server" />
        <Button onClick={this.handleDb} title="Fetch db to page" /> */}
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
