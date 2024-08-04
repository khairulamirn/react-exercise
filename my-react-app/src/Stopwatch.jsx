import React, {useState, useEffect, useRef} from "react";

// elapsed time in malay is masa berlalu
// interval in malay is masa berputar / selang masa

function Stopwatch() {

    // State to track if the stopwatch is running
    const [isRunning, setIsRunning] = useState(false);
    // State to track the elapsed time
    const [elapsedTime, setElapsedTime] = useState(0);
    // useRef to store the interval ID so we can clear it later
    const intervalIdRef = useRef(null);
    // useRef to store the start time
    const startTimeRef = useRef(0);

    // useEffect to handle starting and stopping the interval timer
    useEffect(() => {

        if(isRunning) {
            // Set up the interval to update elapsed time every 10 milliseconds
            intervalIdRef.current = setInterval(() => {
                // Update the elapsed time based on the current time minus the start time
                // this is when button start is clicked
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        // } else {
        //     clearInterval(intervalIdRef.current);
        // }

        // Cleanup function to clear the interval when the component unmounts or isRunning changes
        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]); // Dependency array ensures this effect runs when isRunning changes

    function start(){
        setIsRunning(true);

        // start time to the current time minus elapsed time
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0); // Reset elapsed time to zero
        setIsRunning(false); // Set the stopwatch to not running
    }

    function formatTime() {

        // Convert elapsed time to hours, minutes, seconds, and milliseconds
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        // Pad the hours, minutes, seconds, and milliseconds with leading zeros
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    }

    // Render the stopwatch
    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch