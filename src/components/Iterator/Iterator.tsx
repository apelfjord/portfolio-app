import React from "react";
import { IteratorLi, IteratorUl } from './styled';

type OwnProps = {
  iterateOver: Array<any>,
  pickOut?: string,
  alignRow?: boolean,
  onClick: (arg0: any) => void
};

class Iterator extends React.Component<OwnProps> {

  handleClick = (title: any) => {
    this.props.onClick(title);
  }

  render() {
    let printItems = [];

    for (let i = 0; i < this.props.iterateOver.length; i++) {
      if (this.props.pickOut) {
        printItems.push(
          <IteratorLi 
            key={i} 
            align={this.props.alignRow || false} 
            onClick={() => this.handleClick(i)}>
              {this.props.iterateOver[i].type === 'image' ? 
                (<div style={{'marginBottom': 75 }}><img src={this.props.iterateOver[i][this.props.pickOut]}/> <p><b>{this.props.iterateOver[i].title}</b></p><p>{this.props.iterateOver[i].content}</p></div>) : 
                (this.props.iterateOver[i][this.props.pickOut])}
          </IteratorLi>
        );
      } else {
        printItems.push(
          <IteratorLi 
            key={i} 
            align={this.props.alignRow || false} 
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
