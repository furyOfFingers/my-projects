import React from "react"
import "./timerStyle.css"

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            secondsElapsed: 0
        }
        this.handleStartClick = this.handleStartClick.bind(this)
        this.handleStoptClick = this.handleStoptClick.bind(this)
        this.handleClearClick = this.handleClearClick.bind(this)
    }
    getSeconds() {
        return ("0" + this.state.secondsElapsed % 60).slice(-2);
    }
    getMitunts() {
        return Math.floor(this.state.secondsElapsed / 60);
    }
    handleStartClick() {
        let _this = this;
        this.incrementer = setInterval(function () {
            _this.setState({
                secondsElapsed: (_this.state.secondsElapsed + 1)
            });
        }, 1000)
    }
    handleStoptClick() {
        clearInterval(this.incrementer);
    }
    handleClearClick() {
        this.setState({ secondsElapsed: 0 });
    }
    render() {
        return (
            <div className="mDTimer">
                <h1>{this.getMitunts()}:{this.getSeconds()}</h1>
                <button onClick={this.handleStartClick}>Start</button>
                <button onClick={this.handleStoptClick}>Pause</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </div>
        )
    }
}