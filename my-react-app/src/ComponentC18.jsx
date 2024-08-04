import ComponentD from "./ComponentD18.jsx";
import React, {useContext} from 'react';
import { UserContext } from './ComponentA18.jsx';

function ComponentC() {
    
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC