// useEffect (function, [dependencies])

import React, {useState, useEffect} from "react";

function UseEffect2() {

    // WIDTH HEIGHT STATE
    // default value of the width and height is innerWidth and innerHeight
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Even listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Even listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Window Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}

export default UseEffect2