import React from "react";
import { connect } from "react-redux";
import { HeaderContainer, HeaderTitle } from "./styled";
import Iterator from "../../components/Iterator/Iterator";

type OwnProps = {
  content: any;
};

class Header extends React.Component<OwnProps> {
  render() {
    if (
      !this.props.content ||
      Object.entries(this.props.content).length === 0
    ) {
      return null;
    }

    const content = this.props.content[0].portfolio;
    console.log(content);
    return (
      <HeaderContainer>
        <HeaderTitle>{content.userName}</HeaderTitle>
		<Iterator 
			iterateOver={content.content.tags}
			alignRow={true}
			onClick={() => {}}/>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { content: state.content.content };
};

export default connect(
  mapStateToProps,
  {}
)(Header);
