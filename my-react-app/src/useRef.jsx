
import React, {useState, useEffect, useRef} from "react";

function UseRef() {

    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick() {

        // ref.current++;
        // console.log(ref.current);

        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me! 
            </button>
            <input ref={inputRef} />
        </div>
    );
}

export default UseRef