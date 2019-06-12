import React from "react";
import { connect } from "react-redux";
import { SiteContainer, SiteSubContainer } from './styled';

import { getContent } from "../../redux/actions/contentActions";
import { selectToDisplay } from '../../redux/actions/displayerActions';
import Home from "../../components/Home/Home";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";
import TestNewComponent from "components/TestNewComponent/TestNewComponent";

type OwnProps = {
  content: object;
  selector: string,
  getContent: () => void;
  selectToDisplay: () => void;
};

class Site extends React.Component<OwnProps> {
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    console.log(this.props)
    if (
      !this.props.content ||
      Object.entries(this.props.content).length === 0
    ) {
      this.props.getContent();
      return null;
    }

    return (
      <SiteContainer>
        <Header />
        <SiteSubContainer>
          <Menu />
          {/* <TestNewComponent/> */}
          <Home />
        </SiteSubContainer>
        <Footer />
      </SiteContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    selector: state.selector,
    content: state.content
  };
};

export default connect(
  mapStateToProps,
  { getContent, selectToDisplay }
)(Site);
