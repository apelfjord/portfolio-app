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
        <Button onClick={this.handleDec} title='Decrease'/>
        <Button onClick={this.handleInc} title='Increase'/>
        <p>
          <Button onClick={this.handleFetch} title='Fetch number from server'/>
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
