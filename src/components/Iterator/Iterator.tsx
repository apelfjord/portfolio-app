import React from "react";
import { IteratorLi, IteratorUl } from './styled';
import PhotoCard from "components/PhotoCard/PhotoCard";
import VideoCard from "components/VideoCard/VideoCard";

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
        switch (this.props.iterateOver[i].type) {
          case 'image':
            printItems.push(
              <IteratorLi
                key={i}
                align={this.props.alignRow || false}
                onClick={() => this.handleClick(i)}>
                <PhotoCard element={this.props.iterateOver[i]} />
              </IteratorLi>
            )
            break;
            
          case 'video':
            printItems.push(
              <IteratorLi
                key={i}
                align={this.props.alignRow || false}
                onClick={() => this.handleClick(i)}>
                <VideoCard element={this.props.iterateOver[i]} />
              </IteratorLi>
            )
            break;

          default:
            printItems.push(
              <IteratorLi
                key={i}
                align={this.props.alignRow || false}
                onClick={() => this.handleClick(i)}>
                {this.props.iterateOver[i][this.props.pickOut]}
              </IteratorLi>
            )
            break;
        }

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
