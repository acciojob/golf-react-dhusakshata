import React, { useState } from "react";
import '../styles/App.css';

function App() {
    const [renderBall, setRenderBall] = useState(false);
    const [ballPosition, setBallPosition] = useState({ left: "0px" });

    const buttonClickHandler = () => {
        setRenderBall(true);
        // Add event listener for the right arrow key
        document.addEventListener("keydown", handleKeyDown);
    }

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            // Get the current left position and convert it to a number
            const currentLeft = parseInt(ballPosition.left, 10);
            // Update the left position by 5 pixels
            const newLeft = currentLeft + 5;
            setBallPosition({ left: `${newLeft}px` });
        }
    }

    const renderBallOrButton = () => {
        if (renderBall) {
            return <div className="ball" style={ballPosition}></div>
        } else {
            return <button className="start" onClick={buttonClickHandler}>Start</button>
        }
    }

    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    );
}

export default App;
