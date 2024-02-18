import React, { useEffect } from "react";

const UseEffectHook = () => {
    const [count, setCount] = React.useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log("useEffect Hook called");
    });
    
    return (
        <>
            <h1>useEffect Hook in React </h1>
            <h2>Counter: {count}</h2>
            <button onClick={()=> setCount(count+1)}> Clikc for Increment Counter</button>
        </>
    );
};

export default UseEffectHook;
