
// Imlement useEffect Hook on specific Props

import React, { useEffect, useState } from "react";
import StudentChildComp from "./StudentChildComp";

const UseEffectWithProps = () => {
    const [getData, setData] = useState(10); 
    const [count, setCount] = React.useState(100);

    return (
        <>
            <div>
                <h3>Q. How to use useEffect() Hook Props</h3>
                <h2>1. useEffect Hook with specific props </h2>
                <StudentChildComp count={count} getData={getData} />
                <button onClick={() => setCount(count + 1)}> Update count </button>
                <button onClick={() => setData(getData + 1)}> Update Data </button>
            </div>
        </>
    );
};

export default UseEffectWithProps;









