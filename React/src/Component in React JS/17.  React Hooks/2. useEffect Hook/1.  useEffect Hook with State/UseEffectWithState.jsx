
// Imlement useEffect Hook on specific state

import React, { useEffect, useState } from "react";

const UseEffectWithState = () => {
    const [getData, setData] = useState(10);
    const [count, setCount] = React.useState(100);

    useEffect(() => {
        alert(`count is ${count}`)
        // console.log("useEffect Hook called with count state");
    },[count]);

    useEffect(() => {
        console.log("useEffect Hook called with data state");
    },[getData]);

    return (
        <>
        <div>
            <h3>Q. How to use useEffect() Hook With State</h3>
            <h2>2. useEffect Hook with specific state </h2>
            <h1>Count: {count}</h1>
            <h1>Data: {getData}</h1>
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <button onClick={() => setData(getData + 1)}>Update Data</button>
        </div>
        </>
    );
};

export default UseEffectWithState;
