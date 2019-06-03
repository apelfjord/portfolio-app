import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchNumber,
  increase,
  decrease
} from "../redux/actions/numberActions";

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
    console.log(this.props);
    return (
      <div className="Home">
        <p>{this.props.number}</p>
        <button onClick={this.handleDec}>Decrease</button>
        <button onClick={this.handleInc}>Increase</button>
        <p>
          <button onClick={this.handleFetch}>Fetch number from server</button>
        </p>
      </div>
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
