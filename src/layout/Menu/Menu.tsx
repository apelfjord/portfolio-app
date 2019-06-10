import React from 'react';
import {connect} from 'react-redux';

import {selectToDisplay} from '../../redux/actions/displayerActions';
import {MenuContainer} from './styled';
import Iterator from '../../components/Iterator/Iterator';

type OwnProps = {
	content: any,
	selectToDisplay: (arg0: any) => any,
};

class Menu extends React.Component<OwnProps> {

	handleClick = (key: number) => {
		const title = this.props.content[0].portfolio.content.sections[key].title
		console.log(title)
		this.props.selectToDisplay(key);
	}

	render() {		
		const sections = this.props.content[0].portfolio.content.sections;
		return(
			<MenuContainer>
				<Iterator 
					iterateOver={sections}
					alignRow={false} 
					pickOut='title' 
					onClick={this.handleClick}/>
			</MenuContainer>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		selector: state.selector,
		content: state.content
	}
}

export default connect(mapStateToProps, {selectToDisplay})(Menu);
