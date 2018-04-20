import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./todolListStyle.css";

export default class TodoListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: ["hello", "there"]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState({
            todoItems: this.state.todoItems.concat([newTodo])
        })
    }
    render() {
        let { todoItems } = this.state
        return (
            <div className="mDTodoList">
                <TodoInput onAddTodo={this.addTodo} />
                <TodoList items={todoItems} />
            </div>
        )
    }
}
