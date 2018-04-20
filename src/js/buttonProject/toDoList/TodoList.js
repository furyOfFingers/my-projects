import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    render() {
        let { items } = this.props
        return (
            <div>
                <ul>
                    {items.map((todo, index) => <li className="taskLi" key={index} ><TodoItem text={todo} /></li>)}
                </ul>
            </div>
        )
    }
}