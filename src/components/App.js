import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    handleKeyDown(e) {
        if (e.key === "ArrowRight") {
            const currentLeft = parseInt(this.state.ballPosition.left, 10);
            const newLeft = currentLeft + 5;
            this.setState({
                ballPosition: { left: `${newLeft}px` }
            });
        }
    }

    componentDidMount() {
        // Add event listener for the right arrow key in componentDidMount
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        // Remove the event listener when the component unmounts
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
