import React, { Component } from "react";

export class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }
    addClicked() {
        let { onAddTodo } = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }
    render() {
        let { newTodo } = this.state
        return (
            <div>
                <input className="inputTask" value={newTodo} onChange={(e) => this.setState({ newTodo: e.target.value })} />
                <button onClick={this.addClicked} >Add</button>
            </div>
        )
    }
}