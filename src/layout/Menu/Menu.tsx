import React from 'react';
import {connect} from 'react-redux';
import {MenuContainer, MenuTitle} from './styled';
import Iterator from '../../components/Iterator/Iterator';

type OwnProps = {
	content: any,
};

class Menu extends React.Component<OwnProps> {
	render() {
		if (!this.props.content) return null;

		const sections = this.props.content[0].portfolio.content.sections;
		console.log(sections)
		return(
			<MenuContainer>
				<Iterator iterateOver={sections} pickOut='title'/>
			</MenuContainer>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {content: state.content.content}
}

export default connect(mapStateToProps)(Menu);
