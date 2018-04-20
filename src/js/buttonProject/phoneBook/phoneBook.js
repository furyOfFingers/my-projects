import "./phoneBookStyle.css";
import React from 'react';
import ReactDOM from "react-dom";

export default class PhoneBook extends React.Component {
    constructor() {
        super();
        this.state = {
            isDropFirst: false,
            isDropSecond: false,
            isDropThird: false,
        }
    };
    toggleDrop1() {
        this.setState({
            isDropFirst: !this.state.isDropFirst,
        });
    }
    toggleDrop2() {
        this.setState({
            isDropSecond: !this.state.isDropSecond,
        });
    }
    toggleDrop3() {
        this.setState({
            isDropThird: !this.state.isDropThird,
        });
    }
    render() {
        var dropDownFirst;
        if (this.state.isDropFirst) {
            dropDownFirst = <ul><li>Mail: @Alex.com</li><li>Address:Laptev 23</li></ul>;
        }
        var dropDownSecond;
        if (this.state.isDropSecond) {
            dropDownSecond = <ul><li>Mail: @Larry.com</li><li>Address:Lukatar 22</li></ul>;
        }
        var dropDownThird;
        if (this.state.isDropThird) {
            dropDownThird = <ul><li>Mail: @Clare.com</li><li>Address:Dugan Str.4</li></ul>;
        }
        return (
            <div className="mainBlock">
                <div className="first"> <ul onClick={this.toggleDrop1.bind(this)}><li>Name: Alex</li><li>Surname:Drew</li><li>Phone:+712344553</li></ul>{dropDownFirst}</div>
                <div className="second"><ul onClick={this.toggleDrop2.bind(this)}><li>Name: Larry</li><li>Surname:Lukatar</li><li>Phone:+741455233</li></ul>{dropDownSecond} </div>
                <div className="third"> <ul onClick={this.toggleDrop3.bind(this)}><li>Name: Clare</li><li>Surname:Dugan</li><li>Phone:+752341345</li></ul>{dropDownThird} </div>
            </div>
        )
    }
}
// ReactDOM.render(<PhoneBook />, document.getElementById("index"));