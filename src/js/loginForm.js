import React from 'react';
import ReactDOM from "react-dom";
import { MainDiv } from "./mainDiv";
// import { Switch, Route } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      log: "log",
      pas: "pas",
      loginValue: "",
      passwordValue: "",
    };
    this.handleLoginValue = this.handleLoginValue.bind(this);
    this.handlePasswordValue = this.handlePasswordValue.bind(this);
    this.signInClick = this.signInClick.bind(this);
  }

  handleLoginValue(event) {
    const { value } = event.target;
    this.setState({ loginValue: value });
  }

  handlePasswordValue(event) {
    const { value } = event.target;
    this.setState({ passwordValue: value });
  }

  signInClick() {
    this.state.loginValue == this.state.log &&
      this.state.passwordValue == this.state.pas ?
      ReactDOM.render(<MainDiv />, document.getElementById("index")) :
      alert("wrong login or password");
  }
  render() {
 
    return (
      <div id="logPasswordWindow" className="logPasswordWindow">
        <form>
          <input onChange={this.handleLoginValue} value={this.state.loginValue} type="text" autoComplete="on" className="login" />
          <input onChange={this.handlePasswordValue} value={this.state.passwordValue} type="password" autoComplete="current-password" className="password" />
        </form>
        <button id="lpButton" className="logInButton" onClick={this.signInClick}>Sign in </button>
      </div>
    )
  }
};
ReactDOM.render(<LoginForm />, document.getElementById("index"));