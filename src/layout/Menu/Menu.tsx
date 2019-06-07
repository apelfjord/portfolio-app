import React from 'react';
import {connect} from 'react-redux';
import {MenuContainer} from './styled';
import Iterator from '../../components/Iterator/Iterator';

type OwnProps = {
	content: any,
};

class Menu extends React.Component<OwnProps> {

	handleClick = () => {
		console.log('click!')
	}

	render() {
		
		const sections = this.props.content[0].portfolio.content.sections;
		return(
			<MenuContainer>
				<Iterator iterateOver={sections} pickOut='title' onClick={this.handleClick}/>
			</MenuContainer>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {content: state.content.content}
}

export default connect(mapStateToProps)(Menu);
