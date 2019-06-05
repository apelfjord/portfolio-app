import React from "react";
import { DisplayContainer, DisplayTitle } from "./styled";
import Iterator from "../Iterator/Iterator";

type OwnProps = {
  print?: any;
};

class Display extends React.Component<OwnProps> {
  render() {
    const db = this.props.print[0].portfolio;

    return (
      <DisplayContainer>
        <DisplayTitle>{db.userName}</DisplayTitle>
        <Iterator iterateOver={db.content.tags} alignRow={true} />
      </DisplayContainer>
    );
  }
}

export default Display;
