import React from "react";
import { DisplayContainer, DisplayTitle } from "./styled";
import Iterator from "../Iterator/Iterator";

type OwnProps = {
	print?: any,
};

class Display extends React.Component<OwnProps> {
  render() {

	if (!this.props.print) return null

	const db = this.props.print[0].portfolio;

    return (
      <DisplayContainer>
		<DisplayTitle>{db.userName}</DisplayTitle>
		<Iterator iterateOver={db.content.tags}/>
      </DisplayContainer>
    );
  }
}

export default Display;
