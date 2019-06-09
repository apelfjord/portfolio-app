import React from 'react';
import {connect} from 'react-redux';
import {FooterContainer, FooterText} from './styled';

type OwnProps = {
	content: any,
};

class Footer extends React.Component<OwnProps> {
	render() {
		return(
			<FooterContainer>
				<FooterText>Copyright © 2019 by {this.props.content[0].portfolio.userName}</FooterText>
			</FooterContainer>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {content: state.content}
}

export default connect(mapStateToProps, {})(Footer);
