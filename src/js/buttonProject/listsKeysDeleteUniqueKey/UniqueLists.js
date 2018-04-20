import "./UniqueListsStyle.css";
import React from 'react';
import ReactDOM from "react-dom";
import User from "./user.js";

export default class UniqueLists extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: "wersdf", name: "jo", age: 20 },
                { id: "sdf", name: "bo", age: 20 },
                { id: "asdd", name: "do", age: 20 },
                { id: "asdas", name: "lo", age: 20 }
            ]
        }
    }
    deleteUser(index, e) {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({ users: users });
    }
    render() {
        return (
            <div className="mainULDiv">
                <ul>{
                    this.state.users.map((user) => {
                        return (<User
                            key={user.id}

                            delEvent={this.deleteUser.bind(this, index)}
                        > {user.age} {user.name}
                        </User>)
                    })
                } </ul> </div>
        );
    }
}
// ReactDOM.render(<UniqueLists />, document.getElementById("index"));