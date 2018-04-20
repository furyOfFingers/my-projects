import React from "react";
import  Buttons  from "./button"
import "./colorChangeStyle.css"


export default class ColorChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            colorStyle: { color: 'red' }

        }
        this.handleInput = this.handleInput.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(colorName) {
        this.setState({ colorStyle: { color: colorName } })
    }

    handleInput(e) {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        return (
            <div className="mDColorChanger" >
                <input value={this.state.inputValue} onChange={this.handleInput} />
                <h3 style={this.state.colorStyle}> hello there {this.state.inputValue}</h3>
                <Buttons changeColor={this.changeColor} />
            </div>
        )
    }
}