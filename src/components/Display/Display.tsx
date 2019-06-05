import React from "react";
import { DisplayContainer, DisplayTitle, DisplayText } from "./styled";
import Iterator from "../Iterator/Iterator";

type OwnProps = {
  print?: any;
};

class Display extends React.Component<OwnProps> {
  render() {
    const db = this.props.print[0].portfolio;
	const selectedWork = db.content.sections[2].elements[0];
    return (
      <DisplayContainer>
      {/* PLACEHOLDER BELOW */}
        <DisplayTitle>{selectedWork.title}</DisplayTitle>
        <DisplayText>{selectedWork.content}</DisplayText>
      </DisplayContainer>
    );
  }
}

export default Display;
