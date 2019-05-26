import React, { Component } from 'react'
import path from '../config';

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {num: 1};
        this.handleDec = this.handleDec.bind(this);
        this.handleInc = this.handleInc.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    }
    
    handleDec() {
        this.setState({num: this.state.num - 1});
    }

    handleInc() {
        this.setState({num: this.state.num + 1});
    }

    handleFetch() {
        fetch(path + '/number')
            .then((response) => response.json())
            .then((num) => this.setState(num))
            .catch((err) => console.log(err))
        }

    render() {
        return (
            <div className="Home">
                <p>{this.state.num}</p>
                <button onClick={this.handleDec}>Decrease</button>
                <button onClick={this.handleInc}>Increase</button>
                <p><button onClick={this.handleFetch}>Fetch number from server</button></p>
            </div>
        )
    }
}
