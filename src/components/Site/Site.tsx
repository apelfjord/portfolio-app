import React from "react";
import { connect } from "react-redux";
import { SiteContainer, SiteSubContainer } from "./styled";

import { getContent } from "../../redux/actions/contentActions";
import Home from "../../components/Home/Home";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";

type OwnProps = {
  content: object;
  getContent: () => void;
};

class Site extends React.Component<OwnProps> {
  componentDidMount() {
    this.props.getContent();
  }

  render() {
	if (!this.props.content || 
		Object.entries(this.props.content).length === 0) {
      this.props.getContent();
      return null;
    }

    return (
      <SiteContainer>
        <Header />
        <SiteSubContainer>
          <Menu />
          <Home />
        </SiteSubContainer>
        <Footer />
      </SiteContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { content: state.content.content };
};

export default connect(
  mapStateToProps,
  { getContent }
)(Site);
