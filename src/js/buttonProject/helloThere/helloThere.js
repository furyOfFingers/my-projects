import "./helloThereStyle.css";
import React from 'react';
import ReactDOM from "react-dom";

export default class HelloThere extends React.Component {
  constructor() {
    super();
    this.state = {
      textData: "",
      startValue: "there"
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  };

  handleNameChange(event) {
    const { value } = event.target;
    this.setState({
      textData: value === "" ? this.state.startValue : value
    });
  }

  render() {
    return (
      <form className="textInputDiv">
        <input type="text" className="textInput" value={this.state.textData} onChange={this.handleNameChange} />
        <p className="textInputP">Hello {this.state.textData} </p>
      </form>
    )
  }
}
// ReactDOM.render(<HelloThere />, document.getElementById("index"));