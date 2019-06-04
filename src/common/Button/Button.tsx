import React from 'react'

import {ButtonContainer} from './styled'

type OwnProps = {
    onClick(): void,
    title: String,
}

export default class Button extends React.Component<OwnProps> {

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
