import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchNumber,
  increase,
  decrease
} from "../redux/actions/numberActions";
import {HomeContainer} from './styled';
import Button from '../common/Button/Button';

class Home extends Component {
  handleDec = () => {
    this.props.decrease();
  };

  handleInc = () => {
    this.props.increase();
  };

  handleFetch = () => {
    this.props.fetchNumber();
  };

  render() {
    return (
      <HomeContainer className="Home">
        <p>{this.props.number}</p>
        <button onClick={this.handleDec}>Decrease</button>
        <button onClick={this.handleInc}>Increase</button>
        <p>
          <button onClick={this.handleFetch}>Fetch number from server</button>
        </p>
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => ({
  number: state.numbers.number
});

export default connect(
  mapStateToProps,
  { fetchNumber, increase, decrease }
)(Home);
