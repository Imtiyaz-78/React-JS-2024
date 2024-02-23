import React, { useEffect } from "react";

const StudentChildComp = (props) => {

    useEffect(()=>{
      alert(`count is ${props.count}`)
    },[props.count]) // we can pass multipledependencies in an array like this [props.count, props.getData]

  
    return (
        <>
          <div>
            <h1>Count Props 👍 {props.count}</h1>
            <h1>Data Props 👍 {props.getData}</h1>
          </div>
        </>
    );
};

export default StudentChildComp;
