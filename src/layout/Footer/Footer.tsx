import React from 'react';
import {connect} from 'react-redux';
import {FooterContainer, FooterTitle} from './styled';

type OwnProps = {
	content: object,
};

class Footer extends React.Component<OwnProps> {
	render() {
		return(
			<FooterContainer>
				<FooterTitle>Footer</FooterTitle>
			</FooterContainer>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {content: state.content.content}
}

export default connect(mapStateToProps, {})(Footer);
