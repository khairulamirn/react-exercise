import React, { useState } from 'react';

function MyComponent3() {

    const [car, setCar] = useState({year: 2022, make: "Ford", model: "Mustang"}); //object 

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value})); //this act as new object so use {...} no duplicate
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <hr />
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
            <hr />
        </div>
    )
}

export default MyComponent3