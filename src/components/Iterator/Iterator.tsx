import React from "react";
import { IteratorLi, IteratorUl } from "./styled";

type OwnProps = {
  iterateOver: Array<any>;
  pickOut?: string;
  alignRow?: boolean;
};

class Iterator extends React.Component<OwnProps> {
  render() {
    let printItems = [];

    for (let i = 0; i < this.props.iterateOver.length; i++) {
      if (this.props.pickOut) {
        console.log(this.props.pickOut)
        printItems.push(
          <IteratorLi key={i} alignRow={this.props.alignRow}>
            {this.props.iterateOver[i][this.props.pickOut]}
          </IteratorLi>
        );
      } else {
        printItems.push(
          <IteratorLi key={i} alignRow={this.props.alignRow}>
            {this.props.iterateOver[i]}
          </IteratorLi>
        );
      }
    }

    return <IteratorUl>{printItems}</IteratorUl>;
  }
}

export default Iterator;
