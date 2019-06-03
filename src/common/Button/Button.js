import React from 'react'

import {ButtonContainer} from './styled'

export default class Button extends React.Component {

    onClick = () => {
        this.props.onClick()
    }

    render() {
        return (
            <ButtonContainer onClick={this.onClick}>
               {this.props.title} 
            </ButtonContainer>
        )
    }
}
