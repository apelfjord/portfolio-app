import React from "react";
import { IteratorLi, IteratorUl } from "./styled";

type OwnProps = {
  iterateOver: Array<any>;
  alignRow?: boolean;
};

class Iterator extends React.Component<OwnProps> {
  render() {
    let printItems = [];
    for (let i = 0; i < this.props.iterateOver.length; i++) {
      printItems.push(
        <IteratorLi key={i} alignRow={this.props.alignRow}>{this.props.iterateOver[i]}</IteratorLi>
      );
    }

    return <IteratorUl>{printItems}</IteratorUl>;
  }
}

export default Iterator;
