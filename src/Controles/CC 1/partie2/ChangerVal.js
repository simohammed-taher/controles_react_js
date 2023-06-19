import React, { Component } from 'react'

export default class ChangerVal extends Component {
    constructor() {
        super();
        this.state = { val: 0, couleur: { color: "red" } };
    }
    handleclick() {
        this.setState({
            val: this.state.val % 5 === 0 ? this.state.val + 2 : this.state.val - 2,
            couleur: this.state.val % 5 === 0 ? { color: "blue" } : null
        })
    }
    render() {
        return (
            <div>
                <h1 style={this.state.couleur}>la valeur du vale est : {this.state.val}</h1>
                <button onClick={() => this.handleclick()}>Change</button>
            </div>
        )
    }
}
