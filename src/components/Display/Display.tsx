import React from "react";
import {connect} from 'react-redux';

import { DisplayContainer, DisplayTitle, DisplayText } from "./styled";

type OwnProps = {
  print?: any;
  selector: number,
};

class Display extends React.Component<OwnProps> {
  render() {
    if (!this.props.selector) return null
    console.log(this.props.selector);
  const db = this.props.print[0].portfolio;
	const section = db.content.sections[this.props.selector];
    return (
      <DisplayContainer>
        <DisplayTitle>{section.title}</DisplayTitle>
        <DisplayText>{section.content}</DisplayText>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {content: state.content, selector: state.selector};
}

export default connect(mapStateToProps)(Display);
