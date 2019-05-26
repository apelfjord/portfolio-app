import React, { Component } from 'react'

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {num: 1};
        this.handleDec = this.handleDec.bind(this);
        this.handleInc = this.handleInc.bind(this);
    }
    
    handleDec() {
        this.setState({num: this.state.num - 1});
    }

    handleInc() {
        this.setState({num: this.state.num + 1});
    }


    render() {
        return (
            <div className="Home">
                <p>{this.state.num}</p>
                <button onClick={this.handleDec}>Decrease</button>
                <button onClick={this.handleInc}>Increase</button>
            </div>
        )
    }
}
