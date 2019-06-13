import React from "react";
import { connect } from "react-redux";
import { SiteContainer, SiteSubContainer } from './styled';

import { getContent } from "../../redux/actions/contentActions";
import { selectToDisplay } from '../../redux/actions/displayerActions';
import { authenticate } from '../../redux/actions/authActions';
import Home from "../../components/Home/Home";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";
import TestNewComponent from "components/TestNewComponent/TestNewComponent";
import AdminHome from "components/AdminHome/AdminHome";
import Button from "common/Button/Button";

type OwnProps = {
  content: object;
  selector: string,
  authenticated: boolean,
  getContent: () => void;
  selectToDisplay: () => void;
  authenticate: () => void,
};

class Site extends React.Component<OwnProps> {
  componentDidMount() {
    this.props.getContent();
  }

  login = () => {
    this.props.authenticate()
  };

  render() {

    const loggedIn = this.props.authenticated ? true : false;

    if (
      !this.props.content ||
      Object.entries(this.props.content).length === 0
    ) {
      this.props.getContent();
      return null;
    }

    return (
      <SiteContainer>
        <Button onClick={this.login} title='admin' />
        <Header />
        <SiteSubContainer>
          {!loggedIn ?
            <React.Fragment>
              <Menu />
              <Home />
            </React.Fragment> :
            <AdminHome />}
          {/* <TestNewComponent/> */}
        </SiteSubContainer>
        <Footer />
      </SiteContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    selector: state.selector,
    content: state.content,
    authenticated: state.authenticated,
  };
};

export default connect(
  mapStateToProps,
  {
    getContent,
    selectToDisplay,
    authenticate
  }
)(Site);
