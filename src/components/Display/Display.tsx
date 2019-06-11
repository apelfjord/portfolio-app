import React from "react";
import {connect} from 'react-redux';

import { DisplayContainer, DisplayTitle, DisplayText } from "./styled";
import Gallery from "components/Gallery/Gallery";

type OwnProps = {
  print?: any;
  selector: number,
};

class Display extends React.Component<OwnProps> {
  render() {
    const db = this.props.print[0].portfolio;
    const section = db.content.sections[this.props.selector];

    if (!this.props.selector) 
      return (
        <DisplayContainer>
        <Gallery display={db.content.sections[0]}/>
        </DisplayContainer>
      )

    return (
      <DisplayContainer>
        <Gallery display={section}/>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {content: state.content, selector: state.selector};
}

export default connect(mapStateToProps)(Display);
