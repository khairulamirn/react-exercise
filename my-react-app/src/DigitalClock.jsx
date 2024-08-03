import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // SETUP FUNCTION 
        const intervalId = setInterval(() => setTime(new Date()), 1000);

        // CLEANUP FUNCTION
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // FOR MILITARY TIME
        // hours = hours % 12 || 12;

        // MAKE SURE TO CHANGE CONST TO LET
        // hours = hours < 10 ? `0${hours}` : hours;
        // minutes = minutes < 10 ? `0${minutes}` : minutes;
        // seconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
        // return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
        // return (num < 10 ? "0" : "") + num;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock