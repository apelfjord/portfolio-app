import React from "react";
import { IteratorLi, IteratorUl } from "./styled";

type OwnProps = {
  iterateOver: Array<any>;
  pickOut?: string;
  alignRow?: boolean;
  onClick: () => void;
};

class Iterator extends React.Component<OwnProps> {

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    let printItems = [];

    for (let i = 0; i < this.props.iterateOver.length; i++) {
      if (this.props.pickOut) {
        printItems.push(
          <IteratorLi 
            key={i} 
            alignRow={this.props.alignRow} 
            onClick={this.handleClick}>
            {this.props.iterateOver[i][this.props.pickOut]}
          </IteratorLi>
        );
      } else {
        printItems.push(
          <IteratorLi 
            key={i} 
            alignRow={this.props.alignRow} 
            onClick={this.handleClick}>
            {this.props.iterateOver[i]}
          </IteratorLi>
        );
      }
    }

    return <IteratorUl>{printItems}</IteratorUl>;
  }
}

export default Iterator;
