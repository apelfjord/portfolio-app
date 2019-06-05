import React from "react";
import { DisplayContainer, DisplayTitle } from "./styled";
import Iterator from "../Iterator/Iterator";

type OwnProps = {
  print?: any;
};

class Display extends React.Component<OwnProps> {
  render() {
    const db = this.props.print[0].portfolio;
	const selectedWork = db.content.sections[1].elements[0];
    return (
      <DisplayContainer>
        <DisplayTitle>{db.userName}</DisplayTitle>
        <Iterator 
          iterateOver={db.content.tags} 
          alignRow={true} 
          onClick={() => {}}/>
		{/* PLACEHOLDER BELOW */}
		<div>{selectedWork.title}</div>
		<div>{selectedWork.content}.</div>
      </DisplayContainer>
    );
  }
}

export default Display;
