import React, { Component } from "react";

export class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false
        }
        this.toggleDone = this.toggleDone.bind(this)
    }
    toggleDone() {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        let { text } = this.props

        return (
            <div>
                <input className="inputLiCheckbox" type="checkbox" value={this.state.done} onClick={this.toggleDone} />
                {this.state.done ? "Done:" + text : text}
            </div>
        )
    }
}