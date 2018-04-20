import React from "react";
import "./colorChangeStyle.css"

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.changeColorButton = this.changeColorButton.bind(this);
    }
    changeColorButton(event) {
        let buttonValue = event.target.innerHTML;
        switch (buttonValue) {
            case "Red": this.props.changeColor("#FF0000"); break;
            case "Black": this.props.changeColor("#000"); break;
            case "Green": this.props.changeColor("#0CF800"); break;
            case "Yellow": this.props.changeColor("#FFD300"); break;
            case "Pink": this.props.changeColor("#F66F89"); break;
            default: alert("something wrong"); break;
        }
    }
    render() {
        return (
            <div style={this.state.colorMassive} className="buttonCColorChanger" >
                <button onClick={this.changeColorButton} >Red</button>
                <button onClick={this.changeColorButton} >Black</button>
                <button onClick={this.changeColorButton} >Green</button>
                <button onClick={this.changeColorButton} >Yellow</button>
                <button onClick={this.changeColorButton} >Pink</button>
                <input onChange={this.handleColor} type="color" />
            </div>
        )
    }
}