import "./calculatorStyle.css";
import React from 'react';
import ReactDOM from "react-dom";

export default class Calculate extends React.Component {
  constructor() {
    super();
    this.state = {
      variable1: "",
      variable2: "",
      output: ""
    }
    this.handleInput1Change = this.handleInput1Change.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.opPlus = this.opPlus.bind(this);
    this.opMinus = this.opMinus.bind(this);
    this.opMultiplication = this.opMultiplication.bind(this);
  }
  // second input
  handleInput2Change(event) { this.setState({ variable2: event.target.value }); }
  // function plus
  opPlus() {
    this.setState({
      output: parseFloat(this.state.variable1) + parseFloat(this.state.variable2)
    });
  }
  // function minus
  opMinus(event) { this.setState({ output: this.state.variable1 - this.state.variable2 }); }
  // function multiplication
  opMultiplication(event) { this.setState({ output: this.state.variable1 * this.state.variable2 }); }
  handlePlusClick(event) {
    this.opPlus();
  }
  // first input
  handleInput1Change(event) {
    this.setState({
      variable1: event.target.value
    });
  }
  // second input
  handleInput2Change(event) {
    this.setState({
      variable2: event.target.value
    });
  }
  render() {
    //  variable1 = Number(this.state.variable1.value);
    //   variable2 = Number(this.state.variable2.value)
    // setTimeout(() => {
    //   this.setState({ output: "Larry" });
    // }, 1000)
    return (
      <div className="calculate">
        <div className="leftBlock">
          <input className="variableInput1" value={this.state.variable1} onChange={this.handleInput1Change} />
          <input className="variableInput2" value={this.state.variable2} onChange={this.handleInput2Change} />
          <p className="outpotP"> {this.state.output}</p>
        </div>

        <div className="actions">
          <button value="+" className="plus" onClick={this.handlePlusClick}> +</button>
          <button className="minus" onClick={this.opMinus}>-</button>
          <button className="multiplication" onClick={this.opMultiplication}>* </button>
        </div>
      </div>
    );
  }
}